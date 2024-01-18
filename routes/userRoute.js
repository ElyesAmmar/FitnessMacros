const router = require('express').Router();
const controllers = require('../controllers/userControllers');
const isAuth = require('../middleware/isAuth')

router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.put('/update/:id', controllers.update);
router.delete('/delete/:id', controllers.delete);
router.delete('/drop', controllers.drop);
router.get('/', isAuth, (req, res) => {
    res.status(200).send({user: req.user});
});

module.exports = router;