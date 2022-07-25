const { Rocket } = require('../models');

const rocketData = [
  {
    "name": "Soyuz-FG",
    "origin": "Russia",
    "description": "The Soyuz-FG launch vehicle was an improved version of the Soyuz-U from the R-7 family of rockets, designed and constructed by TsSKB-Progress in Samara, Russia. Guidance, navigation, and control system was developed and manufactured by \"Polisvit\" Special Design Bureau (Kharkov, Ukraine).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Soyuz_TMA-3_launch.jpg/440px-Soyuz_TMA-3_launch.jpg"
  },
  {
    "name": "Firefly Alpha",
    "origin": "United States",
    "description": "Firefly Alpha (Firefly α) is a two-stage orbital expendable launch vehicle developed by the American aerospace company Firefly Aerospace to compete in the commercial small satellite launch market. Alpha is intended to provide launch options for both full vehicle and ride share customers.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Firefly_Alpha_Diagram.svg/440px-Firefly_Alpha_Diagram.svg.png"
  },
  {
    "name": "Epsilon (イプシロンロケット)",
    "origin": "Japan",
    "description": "Epsilon is a solid-fuel rocket designed to launch scientific satellites. It is a follow-on project to the larger and more expensive M-V rocket which was retired in 2006. The Japan Aerospace Exploration Agency (JAXA) began developing the Epsilon in 2007. It is capable of placing a 590 kg payload into Sun-synchronous orbit.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Epsilon_rocket_F2.jpg/440px-Epsilon_rocket_F2.jpg"
  }
]

const seedRockets = () => Rocket.bulkCreate(rocketData);

module.exports = seedRockets;