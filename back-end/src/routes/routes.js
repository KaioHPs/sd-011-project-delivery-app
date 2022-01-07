const router = require('express').Router();
const Products = require('../controllers/Products');
const Users = require('../controllers/Users');

const Sales = require('../controllers/Sales');

const jwtValidation = require('../middlewares/jwtValidation');

const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');

router.post('/login', login);
router.post('/register', register);

router.post('/token', jwtValidation.validateToken);

router.post('/sales/new',  Sales.createSale);

router.get('/users/sellers', Users.getAllSellers);

router.get('/customer/products', Products.getAllProducts);

module.exports = router;
