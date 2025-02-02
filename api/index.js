import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
//app.post("/api/post", userRouter);
//app.get("/api/post", userRouter);
//app.get("/api/posts/:id", )

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
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
