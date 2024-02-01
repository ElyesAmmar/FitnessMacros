const router = require('express').Router();
const controllers = require("../controllers/food_nutritionControllers");

router.post('/post', controllers.post);
router.get('/getfoods', controllers.findByName);
router.get('/extractall', controllers.extractAll);

module.exports = router;
