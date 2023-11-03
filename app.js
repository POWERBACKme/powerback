const passport = require('./routes/api/middleware/passport');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const { SERVER } = require('./constants');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public_html'));
app.use(express.json());
app.use(
  session({
    secret: SERVER.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets
if (process.env.NODE_ENV === 'production')
  app.use(express.static('../static'));
app.use(routes);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to API calls only
app.use('/api', apiLimiter);

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message: 'New account limit reached. Please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.post('/users', createAccountLimiter, (req, res) => {
  //...
});

// Connect to the Mongo DB
mongoose
  .connect(
    process.env.NODE_ENV === 'production'
      ? SERVER.MONGODB_CONNECTION_STRING
      : 'mongodb://127.0.0.1/powerback',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((err) => console.error('MongoDB server error: ' + err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../static'));
  const path = require('path');
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '..', 'static', 'index.html'))
  );
}

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
