// app.js
const express = require('express');
const app = express();
const port = 6071; // You can change this to your desired port

// Middleware to parse JSON data
app.use(express.json());

// Import and use the JSON routes
const jsonRoutes = require('./Routes/routes');
jsonRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
