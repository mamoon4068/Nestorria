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