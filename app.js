const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const { errors } = require('celebrate');

const router = require('./routes');

const limiter = require('./middlewares/rateLimiter');

const { MONGO_URI } = require('./utils/config');

const {
  requestLogger,
  errorLogger,
} = require('./middlewares/logger');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(helmet());

app.use(limiter);

app.use(requestLogger);

mongoose.connect(MONGO_URI);

app.use('/', router);

app.use(errors());

app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
