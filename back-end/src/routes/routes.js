const router = require('express').Router();

const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
