const express = require('express');
const morgan = require('morgan'); // Import the 'morgan' module
const fs = require('fs'); // Import the 'fs' module
const app = express();
const port = 6071; // You can change this to your desired port

// Create a write stream for the log file (append mode)
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });

// Middleware to parse JSON data
app.use(express.json());

// Use Morgan middleware for HTTP request logging
app.use(morgan('combined', { stream: accessLogStream })); // Log to file

// Import and use the JSON routes
const jsonRoutes = require('./Routes/routes');
jsonRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
