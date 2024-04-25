import dotenv from "dotenv";
import express from "express";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is Ready!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connectMongoDB();
});
