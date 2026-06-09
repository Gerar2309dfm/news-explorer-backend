const router = require('express').Router();

const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

const { validateArticle } = require('../middlewares/validation');

router.get('/', getArticles);

router.post('/', validateArticle, createArticle);

router.delete('/:articleId', deleteArticle);

module.exports = router;
