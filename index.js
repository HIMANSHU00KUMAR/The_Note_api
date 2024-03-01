import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors middleware
import dotenv from 'dotenv';
import noteRoutes from './routes/notes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Enable CORS for all requests (you can adjust the options as needed)
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
}

connectToMongoDB();

app.use('/api/notes', noteRoutes);

// app.get('/api/notes/all',getNotes)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
