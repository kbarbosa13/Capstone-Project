// server/server.js
require('dotenv').config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema
const disasterSchema = new mongoose.Schema({
  type: String,
  location: String,
  severity: String,
  magnitude: Number,
  date: { type: Date, default: Date.now },
});

const Disaster = mongoose.model('Disaster', disasterSchema);

// API Routes
app.get('/api/disasters', async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/disasters', async (req, res) => {
  try {
    const newDisaster = new Disaster(req.body);
    await newDisaster.save();
    res.status(201).json(newDisaster);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
