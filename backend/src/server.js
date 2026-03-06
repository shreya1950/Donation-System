import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import donationRoutes from "./routes/donationRoutes.js";
import dns from "node:dns";
dns.setServers(["1.1.1.1","8.8.8.8"]);
import cors from "cors";
dotenv.config();
connectDB();

const app = express();
app.use(cors(
    {
        //origin: 'http://localhost:5173'
    }
))
app.use(express.json());
app.use("/donations", donationRoutes);
app.get("/", (req, res) => {
  res.send("Donation is running");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/donations`);
});
