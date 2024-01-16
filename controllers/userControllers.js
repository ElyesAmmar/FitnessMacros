const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async(req, res) =>{
    try {
        let request = req.body;

        // Password validation regular expression
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

        // Check if the password is in correct form
        if (!passwordRegex.test(req.body.password)){
            return res.status(400).send({ msg: 'Password must be at least 8 characters long and include both letters and numbers.' });
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

        const user = await User.findOne({ where: { email: request }});
        if (!user) {
            return res.status(400).send({msg: "Please provide a valid email address and password. "});
        }

        const isMatch = await bcrypt.compare(request.Password, user.Password );
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
exports.getUser = async(req, res) => {
    res.status
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