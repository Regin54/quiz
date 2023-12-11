import express from "express";
import database from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await database.collection("questions");
    let questions = await collection.find().toArray();

    res.send(questions).status(200);
})

export default router;