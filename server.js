require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
const path = require('path');
const { jwtCheck } = require('./middlewares/auth0Middleware');

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://devdezyn.eu.auth0.com/.well-known/jwks.json',
//   }),
//   audience: 'https://devconneckt/api',
//   issuer: 'https://devdezyn.eu.auth0.com/',
//   algorithms: ['RS256'],
// });

// app.use(jwtCheck);

const app = express();

// Connect to DB
connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', jwtCheck, require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.name, err.message);
  }

  console.log(`Server running on ${PORT} ${process.env.NODE_ENV}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECIEVED. Shutting down gracefully...');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
