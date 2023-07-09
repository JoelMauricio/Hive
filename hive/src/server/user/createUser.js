const express = require('express');
const { supabase, insertData } = require('../supabase');

const createUser = express.Router();
createUser.use(express.json());

// Endpoint to insert data into a table
createUser.post('/insert/user', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const display_name = username;
    const about = 'New to Hive';
    const avatar = null;
    const joined = new Date().toISOString();

    const tableName = 'tbluser';

    const data = {
      email,
      password,
      username,
      display_name,
      about,
      avatar,
      joined,
    };

    // Insert the data into the table using the Supabase client
    const insertedData = await insertData(tableName, data);

    res.status(200).json({
      message: 'Data inserted successfully',
      data: insertedData,
    });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = createUser;
