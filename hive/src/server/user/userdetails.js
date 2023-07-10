const { selectData } = require('../supabase');

const getUserDetails = async (req, res) => {
  try {
    const tableName = 'vwuserinfo';
    const data = await selectData(tableName);
    res.json(data);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = getUserDetails;
