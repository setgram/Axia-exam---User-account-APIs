import express from "express";
import mongoose from "mongoose";

const app = express();

app.listen(3000, () => {
  console.log("server is running");
});

mongoose
  .connect(
    "mongodb+srv://axia:axia@axia.otkyk.mongodb.net/?retryWrites=true&w=majority&appName=Axia"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("error seen");
  });
