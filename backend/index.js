import dotenv from 'dotenv';
dotenv.config();  // Load .env FIRST

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import approutes from './routes/routeindex.js';

if (!process.env.DB_URL) {
    console.error("❌ ERROR: DB_URL is not defined. Check your .env file.");
    process.exit(1);
}

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const app = express();

// Middleware
app.use(cors({
    origin : 'https://rad-paprenjak-ec7dc6.netlify.app'  // allowed all request
    }));
app.use(express.json());
app.use(approutes);

// Connect to MongoDB
mongoose.connect(`${DB_URL}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});
