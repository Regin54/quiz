import express from "express";
import quiz from "./routes/questions.mjs";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use("/api", quiz)

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})