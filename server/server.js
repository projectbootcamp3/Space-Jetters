const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const routes = require('./routes/index');
const db = require('./config/connection');

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

const userData = [
  {
    "username": "senthol",
    "email": "katoch.senthol@gmail.com",
    "password": "123456789"
  },
  {
    "username": "lewis",
    "email": "thiszlewis@gmail.com",
    "password": "123456789"
  },
  {
    "username": "deiondrae",
    "email": "deiondrae@gmail.com",
    "password": "123456789"
  },
  {
    "username": "matthew",
    "email": "matthewapryor@gmail.com",
    "password": "123456789"
  },
  {
    "username": "oindrila",
    "email": "oindrilatalukder.ot@gmail.com",
    "password": "123456789"
  },
  {
    "username": "lucca",
    "email": "lucca.ara7@gmail.com",
    "password": "123456789"
  }
]

app.get('/users', (req, res) => {
  res.json(userData)
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
