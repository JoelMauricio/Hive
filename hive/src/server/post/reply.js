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

const replyPost = async (author, content, replyto, res) => {
  const query = 'CALL spreply($1,$2,$3)';
  const values = [author,content, replyto]; 

  try {
    const result = await pool.query(query,values);
    return result.rows;
  }
  catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }

}
module.exports = replyPost;

