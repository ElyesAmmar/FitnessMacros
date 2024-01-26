const router = require('express').Router();
const controllers = require('../controllers/daily_nutritionControllers');

router.post('/post', controllers.postNutrition);
router.get('/get/:id', controllers.getNutrition);
router.delete('/drop', controllers.drop);


module.exports = router;