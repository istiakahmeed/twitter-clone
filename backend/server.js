import dotenv from "dotenv";
import express from "express";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is Ready!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connectMongoDB();
});
