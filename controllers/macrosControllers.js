const Macros = require("../models/macros");

exports.post = async(req, res) => {
    try {
        let user = req.body
        let ageInMilliseconds = new Date() - new Date(user.age);
        let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        let age = Math.floor(ageInYears);
        let activtyFactors = {"sedentary": 1.2, "lightly active": 1.375, "moderatly active": 1.55, "very active": 1.725, "extra active": 1.9};
        for (let key in activtyFactors) {
            if (key === user.activty) {
                let activtyFactors = activtyFactors[key];
                break; 
            }
        }
        if (user.gender= "men") {
            let BMR = 88.362 + (13.397 * user.weigth) + (4.799 * user.heigth) - (5.677 * age);
            let TDEE = BMR * activtyFactors
        }
    } catch (error) {
        
    }
}