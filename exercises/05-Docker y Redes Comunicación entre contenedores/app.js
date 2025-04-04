const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection settings no puede ser localhost es llamarte a ti mismo
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'dockerApp';

app.get('/', async (req, res) => {
    try {
        const client = await MongoClient.connect(mongoUrl);
        const db = client.db(dbName);
        const collections = await db.listCollections().toArray();
        res.send(`Connected to MongoDB! Collections: ${collections.length}`);
        client.close();
    } catch (error) {
        res.status(500).send('Error connecting to MongoDB: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
