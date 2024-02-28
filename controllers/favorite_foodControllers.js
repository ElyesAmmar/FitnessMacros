const Favorite_Food = require('../models/favorite_food');

exports.postFavorite = async(req, res) => {
    try {
        let request = req.body
        let favorite = await Favorite_Food.create(request);
        return res.status(200).send({msg: 'Save favorite food successfully', response: favorite})
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Error on the server.'});
    }
}
exports.getFavorite = async(req, res) => {
    try {
        let id = req.params.id
        let favorite = await Favorite_Food.findAll({where: {user_id : id}});
        return res.status(200).send({msg: 'Find favorite food successfully', response: favorite});
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Error on the server.'});
    }
}