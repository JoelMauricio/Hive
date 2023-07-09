const express = require('express');
const { supabase, updateData } = require('../supabase');

const updateEmail = express.Router();
updateEmail.use(express.json());

// Endpoint to insert data into a table
updateEmail.post('/update/email', async (req, res) => {
  try {
    const { username, email } = req.body;
    const tableName = 'tbluser';
    const filter = { username: username };

    const data = {
      email,
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

module.exports = updateEmail;
