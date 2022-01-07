const router = require('express').Router();
const Products = require('../controllers/Products');
const jwtValidation = require('../middlewares/jwtValidation');

// const Products = require('../controllers/Products');
const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');

router.post('/login', login);
router.post('/register', register);

router.post('/token', jwtValidation.validateToken);

router.get('/customer/products', Products.getAllProducts);

module.exports = router;
