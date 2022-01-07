const router = require('express').Router();
const Products = require('../controllers/Products');
const jwtValidation = require('../middlewares/jwtValidation');

const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');
const sellerController = require('../controllers/sellerController');
const customerController = require('../controllers/costumerController');


router.get('/seller/orders', sellerController.getAll);
router.get('/seller/orders/:id', sellerController.getById);

router.post('/customer/orders', customerController.createOrder);

router.post('/login', login);
router.post('/register', register);

router.post('/token', jwtValidation.validateToken);

router.get('/customer/products', Products.getAllProducts);

module.exports = router;
