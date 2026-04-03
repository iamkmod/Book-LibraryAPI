const express = require('express'); //node module for creating server
const mongoose = require('mongoose'); //node module for connecting to MongoDB
require('dotenv').config(); //load environment variables from .env file

const app = express(); //server instance  
app.use(express.json()); //middleware to parse JSON request bodies


//Routes for different entities 
app.use("/auth",require("./routes/authRoutes"));
app.use("/author",require("./routes/authorRoutes"));
app.use("/book",require("./routes/bookRoutes"));
app.use("/student",require("./routes/studentRoutes"));
app.use("/attendant",require("./routes/attendantRoutes"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(3000, () => 
    console.log('Server is running on port 3000')
);
