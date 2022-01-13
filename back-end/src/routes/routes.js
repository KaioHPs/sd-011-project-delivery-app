const router = require('express').Router();
const Products = require('../controllers/Products');
const Users = require('../controllers/Users');
const Sales = require('../controllers/Sales');

const jwtValidation = require('../middlewares/jwtValidation');

const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');
const { ordersList } = require('../controllers/customerOrdersController');
const sellerController = require('../controllers/sellerController');
const customerController = require('../controllers/costumerController');

router.get('/seller/orders', sellerController.getAll);
router.get('/seller/orders/:id', sellerController.getById);
router.get('/users/sellers', Users.getAllSellers);
router.get('/customer/products', Products.getAllProducts);
router.get('/sales/details/:saleId', Sales.getSaleById);

router.post('/customer/orders', ordersList);
router.post('/login', login);
router.post('/register', register);
router.post('/token', jwtValidation.validateToken);
router.post('/sales/new', Sales.createSale);

router.put('/seller/orders/:id', customerController.updateOrder);

module.exports = router;
