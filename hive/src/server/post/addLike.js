const express = require('express');
const { supabase, insertData } = require('../supabase');

const addLike = express.Router();
addLike.use(express.json());

// Endpoint to insert data into a table
addLike.post('/apply/like', async (req, res) => {
  try {
    const { user_liked, liked_post } = req.body;

    const tableName = 'tbllike';

    const data = {
        user_liked,
        liked_post
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

module.exports = addLike;
