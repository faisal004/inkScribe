import express from "express";
import cors from "cors";
import Userrouter from "./routes/userRoutes.js";
import connectDB from "./databaseConnection/connectDB.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/user",Userrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
