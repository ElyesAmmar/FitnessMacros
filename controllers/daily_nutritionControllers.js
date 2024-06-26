const Daily_Nutrition = require("../models/daily_nutrition");

exports.postNutrition = async(req, res) => {
    try {
        let user = req.body;
        
        let ageInMilliseconds = new Date() - new Date(user.date_of_birth);
        let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        let age = Math.floor(ageInYears);
        
        let activtyFactor = 0;
        let activties = {"sedentary": 1.2, "lightly active": 1.375, "moderatly active": 1.55, "very active": 1.725, "extra active": 1.9};
        for (let key in activties) {
            if (key === user.activity) {
                activtyFactor = activties[key];
                break; 
            }
        }

        let BMR = 0;
        let goalCalories = 0;
        let macrosNutrimentRatios = 0;
        let goals = {
            "weight loss": [-250, {carbohydrates: 0.4, protein: 0.3, fat: 0.3}],
            "extreme weight loss": [-500, {carbohydrates: 0.3, protein: 0.4, fat: 0.3}],
            "maintenance": [0, {carbohydrates: 0.5, protein: 0.25, fat: 0.25}],
            "muscle gain": [250, {carbohydrates: 0.55, protein: 0.2, fat: 0.25}],
            "extreme muscle gain": [500, {carbohydrates: 0.55, protein: 0.2, fat: 0.25}]
        }
        for (let key in goals) {
            if (key === user.goal) {
                goalCalories = goals[key][0];
                macrosNutrimentRatios = goals[key][1];
                break; 
            }
        }
        if (user.gender === "male") {
            BMR = 88.362 + (13.397 * user.weight) + (4.799 * user.height) - (5.677 * age);
        } else {
            BMR = 447.593 + (9.247 * user.weight) + (3.098 * user.height) - (4.330 * age);
        }
        
        let TDEE = BMR * activtyFactor + goalCalories;
        TDEE = Math.round(TDEE);
        
        let Carbohydrates = Math.round((TDEE * macrosNutrimentRatios.carbohydrates) / 4);
        let Protein = Math.round(TDEE * macrosNutrimentRatios.protein / 4);
        let Fat = Math.round(TDEE * macrosNutrimentRatios.fat / 9);

        let existing = await Daily_Nutrition.findOne({ where : { user_id: user.id }});
        if (!existing){
            const macros = await Daily_Nutrition.create({user_id: user.id,calories: TDEE, carbohydrates: Carbohydrates, protein: Protein, fat: Fat});
            return res.status(200).send({msg: "creations macros successfully", response: macros});
        } else {
            await Daily_Nutrition.update({user_id: user.id,calories: TDEE, carbohydrates: Carbohydrates, protein: Protein, fat: Fat},
                { where : { 
                    user_id: user.id 
                }
            });
            return res.status(200).send({msg: "updating macros successfully"});
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Error on the server.'})
        
    }
}

exports.getNutrition = async(req, res) => {
    try {
        let user_id = req.params.id
        let result = await Daily_Nutrition.findOne({ where: { user_id: user_id } });
        return res.status(200).send({msg: "getting daily nutrition successfully", response: result});
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Error on the server.'});
    }
}

exports.deleteNutrition = async(req, res) => {
    try {
        let id = req.params.id
        let result = await Daily_Nutrition.destroy({where: {user_id : id}});
        return res.status(200).res({msg: "Daily Nutrition deleted"})
    } catch (error) {
        console.log(error);
        return  res.status(500).send({ msg: 'Error on the server.'});
    }
}

exports.drop = async(req, res) => {
    try {
        await Macros.drop();
        res.status(200)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}