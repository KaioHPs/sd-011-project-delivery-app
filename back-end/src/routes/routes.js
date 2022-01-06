const router = require('express').Router();
const Products = require('../controllers/Products');

// const Products = require('../controllers/Products');
const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');
const { ordersList } = require('../controllers/customerOrdersController');

router.post('/login', login);
router.post('/register', register);
router.post('/customer/orders', ordersList);

router.get('/customer/products', Products.getAllProducts);

module.exports = router;
