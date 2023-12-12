import express from "express";
import database from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await database.collection("questions");
    let questions = await collection.find().toArray();

    res.send(questions).status(200);
})

router.post("/post", async (req, res) => {
    const quizResult = {
        points: req.body.points,
        time: req.body.time,
        maxPoints: req.body.maxPoints,
        username: req.body.username
    }

    await database.collection('stats').insertOne(quizResult, (err, res) => {
        if(err) throw err;
    })
    res.send().status(200);
})

router.get("/stats", async (req, res) => {
    const sort = {points: -1};
    const query = {};

    let collection = await database.collection("stats");
    let stats = await collection.find(query).sort({points: -1}).toArray();

    res.send(stats).status(200);
})

export default router;