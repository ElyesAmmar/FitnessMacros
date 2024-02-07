const User = require('../models/user');
const { Sequelize, Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async(req, res) =>{
    try {
        let request = req.body;
        // Password validation regular expression
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
        // Check if the password is in correct form
        if (!passwordRegex.test(request.password)){
            return res.status(400).send({ msg: 'Password must be at least 8 characters long and include both letters and numbers.' });
        } 
        const validateEmail = Sequelize.Validator.isEmail(request.email);
        const existingEmail = await User.findOne({ where: { email: request.email }});
        if (!validateEmail) {
            return res.status(400).send({ msg: "Invalid email address" });
        }
        if (existingEmail) {
            return res.status(400).send({ msg: "user already exists" });
        }
        const user = await User.create(request);

        // sign user 
        const   payload = {
            id: user.id
           }
        const token = await jwt.sign(payload, process.env.secretKey)
        return res.status(200).send({ msg: "register user successfully", user , token})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: error.errors[0].message});
    }
}

exports.login = async(req, res) => {
    try {
        let request = req.body

        const user = await User.findOne({ where: { 
            [Op.or]: [
                { email: request.email },
                { username: request.username }
            ]
        }});
        if (!user) {
            return res.status(400).send({msg: "Please provide a valid email address and password. "});
        }
        const isMatch = await bcrypt.compare(request.password, user.password );
        if(!isMatch){
            return res.status(400).send({msg:'Please provide a valid email address and password. '})
        }
        const payload = {
            id: user.id
        }
        const token = await jwt.sign(payload, process.env.secretKey);

        return res.status(200).send({msg: "login user successfully", user, token});

    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"User Login Failed"});
    }
}

exports.update = async(req, res) => {
    try {
        const id = req.params.id
        const request = req.body
        let result = await User.update({...request}, {
            where: {
              id: id
            }
        });
        return res.status(200).send({msg: "update user successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Update user failed" });
    }
}

exports.delete = async(req, res) => {
    try {
        let user = req.params.id
        await User.destroy({where:{id : user}})
        res.status(200).send({msg: "delete user successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: "Delete user failed"});
    }
}

exports.drop = async(req, res) => {
    try {
        await User.drop();
        res.status(200)
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}