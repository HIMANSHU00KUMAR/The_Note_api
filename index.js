import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors middleware
import dotenv from 'dotenv';
import noteRoutes from './routes/notes.js';
// import path from "path";
// import { fileURLToPath } from "url";

import morgan from "morgan";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Enable CORS for all requests (you can adjust the options as needed)
// app.use(cors(
//   // origin: 'http://localhost:3000'
// ));
async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
}

connectToMongoDB();
app.use(express.json());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
];

app.use(options);

// app.use("/assets", express.static(path.join(__dirname, "public/assets")));




app.use('/api/notes', noteRoutes);

// app.get("/",(req,res)=>{
//   app.use(express.static(path.resolve(__dirname,"frontend","build")));
//   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// });




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
