const { Op } = require('sequelize')
const Food_Nutrition = require('../models/food_nutrition');
const fs = require('fs');
const csv = require('csv-parser');

exports.post = async(req, res) => {
    try {
        fs.createReadStream('nutriments.csv')
        .pipe(csv())
        .on('data', async(data) => {
            try {
                if (data.protein === "-") {
                    data.protein = 0;
                } else {
                    data.protein =  parseFloat(data.protein.replace(/[^\d.]/g, ''), 10);
                }
                if (data.carbohydrates === "-") {
                    data.carbohydrates = 0;
                } else {
                    data.carbohydrates =  parseFloat(data.carbohydrates.replace(/[^\d.]/g, ''), 10);
                }
                if (data.fat === "-") {
                    data.fat = 0;
                } else {
                    data.fat =  parseFloat(data.fat.replace(/[^\d.]/g, ''), 10);
                }
                data.calories =  parseFloat(data.calories, 10);
                
                await Food_Nutrition.create(data);
                
            } catch (error) {
                console.log(error);
            }
        })
        .on('end', () => {
            // console.log('foods', foods);
            return res.status(200).send({msg: 'data recieved'});
        });
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: 'Error on the server.'})
    }
}

exports.findByName = async(req, res) => {
    try {
        let  name = req.body.name
        let data = await Food_Nutrition.findAll({where: {
            name_fr: {
                [Op.like]: `%${name}%`
            }
        }});
        if (!data) {
            return res.status(400).send({msg: 'foods not found'});
        }
        return res.status(200).send({msg: 'find foods successfully', response: data})
    } catch (error) {
        return res.status(500).send({msg: 'Error on the server.'})
    }
}

exports.extractAll = async(req, res)=>{
    try {
        const data = await Food_Nutrition.findAll();
        const header = Object.keys(data[0]).join(',');
        const rows = data.map((el)=> Object.values(el).join(','));

        // Set the appropriate HTTP headers
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; allFoodsNutritions.csv');

        return res.status(200).send({msg: 'extract data successfully', response: header + '\n' + rows.join('\n')})
    } catch (error) {
        res.status(500).send({msg: 'Error on the server.'})
    }
}