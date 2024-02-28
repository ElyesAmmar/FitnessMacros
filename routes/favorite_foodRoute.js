const router = require('express').Router();
const controllers = require('../controllers/favorite_foodControllers');

router.post('/post', controllers.postFavorite);
router.get('/get/:id', controllers.getFavorite);
router.delete('/delete/:id', controllers.deleteFavorite);

module.exports = router;
