const router = require('express').Router();
const Products = require('../controllers/Products');

// const Products = require('../controllers/Products');
const { login } = require('../controllers/loginController');

router.post('/login', login);

router.get('/customer/products', Products.getAllProducts);

module.exports = router;
