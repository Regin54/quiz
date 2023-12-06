import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config({path: "../.env"});

const uri = "mongodb+srv://quiz:Ll7PF4rMpGKcX7yF@cluster0.vkddhgl.mongodb.net/" || "";

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