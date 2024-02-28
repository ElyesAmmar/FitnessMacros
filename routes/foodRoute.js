const router = require('express').Router();
const controllers = require("../controllers/foodControllers");

router.post('/post', controllers.post);
router.get('/getfoods', controllers.findByName);
router.get('/getfood/:id', controllers.findById);
router.get('/extractall', controllers.extractAll);

module.exports = router;
