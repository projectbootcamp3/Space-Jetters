const MongoClient = require("mongodb").MongoClient;
const rocketData = require('./rocket-seeds.json');
const userData = require('./user-seeds.json');
const destinationData = require('./destination-seeds.json')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

async function seedDB() {
    // Connection URL
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/space-jetters"
    console.log('MONGODB_URI:', uri, ' 🔗')

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server! 🌐");

        const db = client.db("space-jetters");
        const rocketsCollection = db.collection("rockets");
        const destinationsCollection = db.collection("destinations");
        const usersCollection = db.collection("users");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        rocketsCollection.drop();
        destinationsCollection.drop();
        usersCollection.drop();

        await rocketsCollection.insertMany(rocketData);
        console.log("Rockets seeded! 🚀");
        await destinationsCollection.insertMany(destinationData);
        console.log("Destinations seeded! 🪐");
        await usersCollection.insertMany(userData);
        console.log("Users seeded! 🚻");

        console.log("Database seeded! 🌱");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();