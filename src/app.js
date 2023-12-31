require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cowboyRoutes = require('./api/routes/cowboyRoutes');
const app = express();
app.use(cors());

// Middleware for handling json
app.use(express.json())

// Mongoose connection to MongoDB
connectDB();

// Routes
app.use('/api', cowboyRoutes);
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
