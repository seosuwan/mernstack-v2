import UserRouter from "./api/route/UserRouter";
import connectDB from "./Loaders/db";

connectDB();

const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors()); // CORS 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(UserRouter); //라우터
app.set("port", 3001);
app
  .listen(app.get("port"), () => {
    console.log(`${app.get("port")} server is Running`);
  })
  .on("error", (err) => {
    console.log(`Error message ${err}`);
  });