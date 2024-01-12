const User = require('../models/user');

exports.register = async(req, res) =>{
    try {
        const user = await User.create(req.body);
        res.status(200).send({msg: "register user successfully", response: user })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }
}