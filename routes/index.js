const router = require('express').Router();

const usersRouter = require('./users');
const articlesRouter = require('./articles');
const auth = require("../middlewares/auth")

router.use('/users', usersRouter);

router.use(auth);

router.use('/articles', articlesRouter);

module.exports = router;
