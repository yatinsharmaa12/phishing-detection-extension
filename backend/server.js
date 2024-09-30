const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Define your routes here
// app.use('/api', yourRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
