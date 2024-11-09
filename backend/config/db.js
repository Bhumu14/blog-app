const sqlite3 = require('sqlite3').verbose();

// Function to connect to the database
const connectDB = () => {
    const db = new sqlite3.Database('your-database-name.db', (err) => {
        if (err) {
            console.error('Error opening database:', err.message);
        } else {
            console.log('Database connected successfully');
        }
    });
    return db;  // Return the connection
};

// Export the connectDB function
module.exports = connectDB;
