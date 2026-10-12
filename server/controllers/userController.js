<<<<<<< HEAD
export const getUserProfile = async (req, res) => {
    res.json({
        success: true,
        role: req.user.role,
        recentSearchedCities: req.user.recentSearchedCities,
    });
};

export const addRecentSearchedCity = async (req, res) => {
    try {
        const city = req.body.city;
        if (typeof city !== "string" || !city.trim()) {
            return res.status(400).json({ success: false, message: "A city is required" });
        }

        const recentSearchedCities = req.user.recentSearchedCities
            .filter((recentCity) => recentCity !== city.trim())
            .concat(city.trim())
            .slice(-3);
        req.user.recentSearchedCities = recentSearchedCities;
        await req.user.save();
        res.json({ success: true, recentSearchedCities });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
