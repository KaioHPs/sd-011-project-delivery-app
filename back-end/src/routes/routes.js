const router = require('express').Router();
const Products = require('../controllers/Products');
<<<<<<< HEAD
=======
const Users = require('../controllers/Users');
const Sales = require('../controllers/Sales');

>>>>>>> 55bdcad08061e93e13f7c50c9d7bb4615c3190cf
const jwtValidation = require('../middlewares/jwtValidation');

const { login } = require('../controllers/loginController');
const { register } = require('../controllers/registerController');

router.post('/login', login);
router.post('/register', register);

router.post('/token', jwtValidation.validateToken);

<<<<<<< HEAD
=======
router.post('/sales/new', Sales.createSale);

router.get('/users/sellers', Users.getAllSellers);

>>>>>>> 55bdcad08061e93e13f7c50c9d7bb4615c3190cf
router.get('/customer/products', Products.getAllProducts);

module.exports = router;
