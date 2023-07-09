const express = require('express');
const { supabase } = require('../supabase');

const deleteBookmark = express.Router();
deleteBookmark.use(express.json());

// Endpoint to delete a bookmark
deleteBookmark.delete('/delete/bookmark', async (req, res) => {
  try {
    const { user_bookmarked, bookmarked_post } = req.body;

    const tableName = 'tblbookmark'; // Replace with your actual table name

    const { data: deletedData, error } = await supabase
      .from(tableName)
      .delete()
      .eq('user_bookmarked', user_bookmarked)
      .eq('bookmarked_post', bookmarked_post);

    if (error) {
      throw error;
    }

    res.status(200).json({
      message: 'Bookmark deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting bookmark:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = deleteBookmark;
