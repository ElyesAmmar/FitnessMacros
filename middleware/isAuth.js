const jwt = require('jsonwebtoken');
require('dotenv').config({path:'../.env'});
const User = require('../models/user');

const isAuth = async(req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        if (!token) {
            return res.status(400).send("No token, authorization denied");
        }
        const decode = await jwt.verify(token, process.env.secretKey);
        const user = await User.findByPk(decode.id);
        if (!user) {
            return res.status(400).send({msg:'User not found'});
        }
        req.user = user.dataValues;
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: 'Token not valid'})
    }
}

module.exports = isAuth;