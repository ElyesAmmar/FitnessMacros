const router = require('express').Router();
const controllers = require('../controllers/favorite_foodControllers');

router.post('/post', controllers.postFavorite);
router.get('/get', controllers.getFavorite);

module.exports = router;
