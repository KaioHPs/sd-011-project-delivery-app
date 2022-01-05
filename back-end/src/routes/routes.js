const router = require('express').Router();

const { login } = require('../controllers/loginController');
const sellerController = require('../controllers/sellerController');
const customerController = require('../controllers/costumerController');


router.get('/seller/orders', sellerController.getAll);
router.post('/customer/orders', customerController.createOrder);
router.post('/login', login);

module.exports = router;
