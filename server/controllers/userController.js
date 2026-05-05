// get user profile and recent searched[Get '/']
export const getUserProfile = async (req, res) => {
    try {
        const role = req.user.role
        const recentSearchedCititiens = req.user.recentSearchedCititiens
        res.json({ success: true, role, recentSearchedCititiens });
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Add a new city to the user's recent seraches history [post '/store-recent-city']

export const addRecentSearchedCity = async (req, res) => {
    try {
        const { addRecentSearchedCities} = req.body
        const user = await req.user
        if(user.recentSearchedCititiens.length < 3){
            user.recentSearchedCititiens.push(recentSearchedCities)
        }else{
            user.recentSearchedCitities.shift()
            user.recentSearchedCititiens.push(recentSearchedCities)
        }
        await user.save()
        res.json({ success: true, message: "City Added"})
    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}