const router = require('express').Router();

const { getCurrentUser, createUser, login } = require('../controllers/users');
const { validateSignup, validateSignin } = require('../middlewares/validation');
const auth = require('../middlewares/auth');

router.get('/me', auth, getCurrentUser);
router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);

module.exports = router;
