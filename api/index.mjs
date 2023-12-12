import express from "express";
import quiz from "./routes/routes.mjs";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

app.use("/api", quiz)

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})