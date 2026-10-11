const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'ApexTrack API is running smoothly.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});