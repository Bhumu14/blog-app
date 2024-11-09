const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const connectDB = require('./config/db'); 
console.log(connectDB);
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies
app.use('/blogs', blogRoutes);
// Connect to database
connectDB();


// Optional route to handle root path
app.get('/', (req, res) => {
    res.send('Welcome to the Blog Admin Dashboard API');
});

// Use routes
app.use('/blogs', blogRoutes);

// Start server
//const PORT = 3001;
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Blog Admin Dashboard API is running on port ${PORT}`);
});
