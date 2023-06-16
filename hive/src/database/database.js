const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg')
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.AWS_ENDPOINT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.AWS_PORT,
})
client.connect(function(err) {
 if (err) throw err;
  console.log("Connected!");
});
