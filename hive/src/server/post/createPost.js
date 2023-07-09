const express = require('express');
const { supabase, insertData } = require('../supabase');

const createPost = express.Router();
createPost.use(express.json());

// Endpoint to insert data into a table
createPost.post('/insert/post', async (req, res) => {
  try {
    const { author, content } = req.body;
    const reply = false;
    const reply_to = null;

    const tableName = 'tblpost';

    const data = {
        author,
        content,
        reply,
        reply_to
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

module.exports = createPost;
