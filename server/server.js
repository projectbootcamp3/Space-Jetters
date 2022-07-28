const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const routes = require('./routes/index');
const db = require('./config/connection');
const jwt = require('jsonwebtoken');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const PORT = process.env.PORT || 4000;

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

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

app.get('/destinations', authMiddleware, (req, res) => {
  res.json(destinations.filter(destination => destination.username === req.user.name))
})


app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}! 🛰`);
  });
});
