const { Op } = require('sequelize')
const Food = require('../models/food');
const fs = require('fs');
const csv = require('csv-parser');

exports.post = async(req, res) => {
    try {
        fs.createReadStream('food.csv')
        .pipe(csv())
        .on('data', async(data) => {
            try {

                if (data.protein === "-") {
                    data.protein = 0;
                } else {
                    data.protein =  parseFloat(data.protein, 10);
                }
                if (data.carbohydrates === "-") {
                    data.carbohydrates = 0;
                } else {
                    data.carbohydrates =  parseFloat(data.carbohydrates, 10);
                }
                if (data.fat === "-") {
                    data.fat = 0;
                } else {
                    data.fat =  parseFloat(data.fat, 10);
                }

                if (data.protein_100 === "-") {
                    data.protein_100 = 0;
                } else {
                    data.protein_100 =  parseFloat(data.protein_100, 10);
                }
                if (data.carbohydrates_100 === "-") {
                    data.carbohydrates_100 = 0;
                } else {
                    data.carbohydrates_100 =  parseFloat(data.carbohydrates_100, 10);
                }
                if (data.fat_100 === "-") {
                    data.fat_100 = 0;
                } else {
                    data.fat_100 =  parseFloat(data.fat_100, 10);
                }

                data.calories =  parseInt(data.calories, 10);
                data.calories_100 =  parseInt(data.calories_100, 10);
                
                await Food.create(data);
                
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
        
        let  name = req.query.name;
        let  names = name.split(' ');
        let whereCondition = names.map((word)=>  ({[Op.substring]: word}));
        let data = await Food.findAll({where: {
            name_fr: {
                [Op.and]: whereCondition
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
        const data = await Food.findAll();
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