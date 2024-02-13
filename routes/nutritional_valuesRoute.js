const router = require('express').Router();
const controllers = require("../controllers/nutritional_valuesControllers");

router.post('/post', controllers.post);
router.get('/getfoods', controllers.findByName);
router.get('/extractall', controllers.extractAll);

module.exports = router;
