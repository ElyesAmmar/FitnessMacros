const router = require('express').Router();
const controllers = require('../controllers/userControllers');

router.post('/register', controllers.register);


module.exports = router;