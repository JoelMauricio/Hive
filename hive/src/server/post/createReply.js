const express = require('express');
const { supabase, insertData } = require('../supabase');

const createReply = express.Router();
createReply.use(express.json());

// Endpoint to insert data into a table
createReply.post('/insert/reply', async (req, res) => {
  try {
    const { author, content, reply_to } = req.body;
    const reply = true;

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

module.exports = createReply;
