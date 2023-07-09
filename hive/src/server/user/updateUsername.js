const express = require('express');
const { supabase, updateData } = require('../supabase');

const updateUsername = express.Router();
updateUsername.use(express.json());

// Endpoint to insert data into a table
updateUsername.post('/update/username', async (req, res) => {
  try {
    const { current_username, username } = req.body;
    const tableName = 'tbluser';
    const filter = { username: current_username };

    const data = {
      username,
    };

    // Insert the data into the table using the Supabase client
    const insertedData = await updateData(tableName, data, filter)

    res.status(200).json({
      message: 'Data inserted successfully',
      data: insertedData,
    });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = updateUsername;
