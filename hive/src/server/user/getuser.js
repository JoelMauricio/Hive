const dotenv = require('dotenv');
const path = require('path');
const { Pool } = require('pg');

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.AWS_ENDPOINT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.AWS_PORT,
})

const getUserData = (req, res) => {
  const query = 'SELECT * FROM vwuserinfo'; // Replace 'your_table' with your actual table name

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(result.rows);
    }
  });
};

module.exports = getUserData;

