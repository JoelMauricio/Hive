const express = require('express');
const { supabase } = require('../supabase');

const deleteLike = express.Router();
deleteLike.use(express.json());

deleteLike.delete('/delete/like', async (req, res) => {
  try {
    const { user_liked, liked_post } = req.body;

    const tableName = 'tbllike'; // Replace with your actual table name

    const { data: deletedData, error } = await supabase
      .from(tableName)
      .delete()
      .eq('user_liked', user_liked)
      .eq('liked_post', liked_post);

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

module.exports = deleteLike;
