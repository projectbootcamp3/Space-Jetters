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

const users = [
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

const rockets = [
  {
    "username": "Matt",
    "name": "Soyuz-FG",
    "origin": "Russia",
    "description": "The Soyuz-FG launch vehicle was an improved version of the Soyuz-U from the R-7 family of rockets, designed and constructed by TsSKB-Progress in Samara, Russia. Guidance, navigation, and control system was developed and manufactured by \"Polisvit\" Special Design Bureau (Kharkov, Ukraine).",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Soyuz_TMA-3_launch.jpg/440px-Soyuz_TMA-3_launch.jpg"
  },
  {
    "username": "Matt",
    "name": "Firefly Alpha",
    "origin": "United States",
    "description": "Firefly Alpha (Firefly α) is a two-stage orbital expendable launch vehicle developed by the American aerospace company Firefly Aerospace to compete in the commercial small satellite launch market. Alpha is intended to provide launch options for both full vehicle and ride share customers.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Firefly_Alpha_Diagram.svg/440px-Firefly_Alpha_Diagram.svg.png"
  },
  {
    "username": "Matt",
    "name": "Epsilon (イプシロンロケット)",
    "origin": "Japan",
    "description": "Epsilon is a solid-fuel rocket designed to launch scientific satellites. It is a follow-on project to the larger and more expensive M-V rocket which was retired in 2006. The Japan Aerospace Exploration Agency (JAXA) began developing the Epsilon in 2007. It is capable of placing a 590 kg payload into Sun-synchronous orbit.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Epsilon_rocket_F2.jpg/440px-Epsilon_rocket_F2.jpg"
  }
]

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

app.get('/destinations', authenticateToken, (req, res) => {
  res.json(destinations.filter(destination => destination.username === req.user.name))
})

app.post('/login', (req, res) => {
  // Authenticate user
  const username = req.body.username
  const user = { name: username }
  // console.log(user)
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ').pop().trim();
  // const token = authHeader && authHeader.split(' ')[1]
  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    console.log('REQUESTED USER: ', req.user);
    next();
  })
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
