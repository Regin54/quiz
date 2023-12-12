import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config();
const uri = process.env.ATLAS_URI || "";

let conn;
async function connect() {
    const client = new MongoClient(uri);
    try{
        conn = await client.connect();
    }
    catch(e) {
        console.error(e);
    }
    finally {
        return conn.db("quiz");
    }
}

let database = await connect();

export default database;