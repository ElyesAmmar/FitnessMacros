const router = require('express').Router();
const controllers = require('../controllers/macrosControllers');

router.post('/post', controllers.post);
router.delete('/drop', controllers.drop);

module.exports = router;