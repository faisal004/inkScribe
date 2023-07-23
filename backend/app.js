import express from "express";
import cors from "cors";
import Userrouter from "./routes/userRoutes.js";
import connectDB from "./databaseConnection/connectDB.js";
import bodyParser from "body-parser";
import Postrouter from "./routes/postRoutes.js"

const app = express();
const port = 3000;
connectDB();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use("/user",Userrouter);
app.use("/",Postrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
