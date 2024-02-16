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

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/notes', noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
