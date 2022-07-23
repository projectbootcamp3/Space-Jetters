const MongoClient = require("mongodb").MongoClient;
const rocketData = require('./rocket-seeds.json')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

async function seedDB() {
    // Connection URL
    const uri = process.env.MONGODB_URI || 'mongodb://localhost/space-jetters'
    console.log('MONGODB_URI:', uri)

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("space-jetters").collection("rockets");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        await collection.insertMany(rocketData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();