const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
const carRoutes = require('./controllers/carControllers');
app.use('/api/cars', carRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
