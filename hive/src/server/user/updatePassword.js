const express = require('express');
const { supabase, updateData } = require('../supabase');

const updatePassword = express.Router();
updatePassword.use(express.json());

// Endpoint to insert data into a table
updatePassword.post('/update/password', async (req, res) => {
  try {
    const { username, password } = req.body;
    const tableName = 'tbluser';
    const filter = { username: username };

    const data = {
      password,
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

module.exports = updatePassword;
