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

const updateEmail = async (user, email, res) => {
  const query = 'CALL spupdateemail($1, $2)';
  const values = [user,email]; 

  try {
    const result = await pool.query(query,values);
    return result.rows;
  }
  catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }

}
module.exports = updateEmail;

