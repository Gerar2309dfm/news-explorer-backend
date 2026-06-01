const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require("cors")
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

app.use(cors ({
  origin: [
    'http://localhost:5173',
  ],
}));

app.use(helmet());

app.use(limiter);

app.use(requestLogger);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/', router);

app.use(errors());

app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
