const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://0.0.0.0:27017/";

async function connect() {
    const client = new MongoClient(url);
    try{
        await client.connect();

        const result = await client.db("quiz").collection("questions").find().toArray();
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }
    finally {
        await client.close();
    }
}