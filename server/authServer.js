const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const routes = require('./routes/index');
const db = require('./config/connection');
const jwt = require('jsonwebtoken');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const PORT = 4000;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath} 🔭`);
};

startServer();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

console.log('REFRESH TOKEN:', process.env.REFRESH_TOKEN_SECRET)

const destinations = [
  {
    "username": "Matthew",
    "name": "Matthew",
    "date": "August 5, 2023",
    "crew": 4
  },
  {
    "username": "Senthol",
    "name": "Neptune",
    "date": "December 1, 2022",
    "crew": 2
  },
  {
    "username": "Lucca",
    "name": "Pluto",
    "date": "January 17, 2025",
    "crew": 10
  }
]

// ONLY LOGIN, LOGOUT, REFRESH TOKENS ON THIS SERVER

let refreshTokens = []

app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403)
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ name: user.name });
    res.json(accessToken);
  })
})

app.get('/destinations', (req, res) => {
  res.json(destinations.filter(destination => destination.username === req.user.name))
});

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
});

app.post('/login', (req, res) => {
  // Authenticate user
  const username = req.body.username
  const user = { name: username }
  // console.log(user)
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken);
  return userTokens = res.json({ accessToken: accessToken, refreshToken: refreshToken })
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' })
};

app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}! 🛰`);
  });
});
