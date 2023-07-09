const express = require('express');
const { supabase, insertData } = require('../supabase');

const addBookmark = express.Router();
addBookmark.use(express.json());

// Endpoint to insert data into a table
addBookmark.post('/apply/bookmark', async (req, res) => {
  try {
    const { user_bookmarked, bookmarked_post } = req.body;

    const tableName = 'tblbookmark';

    const data = {
        user_bookmarked,
        bookmarked_post
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

module.exports = addBookmark;
