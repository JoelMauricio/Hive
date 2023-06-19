const express = require('express');
const app = express();
const port = 3000;

// API modules
const getUserData = require('./user/getuser.js');
const registerUser = require('./user/register.js');

app.use(express.json());

app.get('/api/users', getUserData);

app.post('/api/register', async (req, res) => {
  try {
    const { email, username, password } = req.body; // Assuming the request body contains the arguments

    const result = await registerUser(email, username, password);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Rest of the code...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

