const Article = require('../models/article');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send(articles))
    .catch(next);
};

const createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.status(201).send(article))
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  const { articleId } = req.params;

  Article.findById(articleId)
    .then((article) => {
      if (!article) {
        return next(new NotFoundError('Article not fuund'));
      }

      if (article.owner.toString() !== req.user._id) {
        return next(new ForbiddenError('Forbidden'));
      }

      return Article.findByIdAndDelete(articleId)
        .then(() => {
          res.send({
            message: 'Article deleted',
          });
        });
    })
    .catch(next);
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
