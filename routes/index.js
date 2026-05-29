const router = require('express').Router();

const auth = require('../middlewares/auth');

const {
  createUser,
  login,
} = require('../controllers/users');

const {
  validateSignup,
  validateSignin,
} = require('../middlewares/validation');

const usersRouter = require('./users');
const articlesRouter = require('./articles');

router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);

router.use(auth);

router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

module.exports = router;
