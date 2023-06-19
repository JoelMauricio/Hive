const express = require('express');
const app = express();
const port = 3000;

// API modules
const getUserData = require('./user/getuser.js');
const registerUser = require('./user/register.js');
const updateDisplay = require('./user/updatedisplay.js')
const updateAbout = require('./user/updateabout.js');
const updateAvatar = require('./user/updateavatar.js');
const updatePassword = require('./user/updatepassword.js')
const updateUsername = require('./user/updateusername.js')
const updateEmail = require('./user/updateemail.js')

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

app.post('/api/update/display', async (req, res) => {
  try {
    const { user, display } = req.body; // Assuming the request body contains the arguments

    const result = await updateDisplay(user, display);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/update/about', async (req, res) => {
  try {
    const { user, about } = req.body; // Assuming the request body contains the arguments

    const result = await updateAbout(user, about);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/update/avatar', async (req, res) => {
  try {
    const { user, avatar } = req.body; // Assuming the request body contains the arguments

    const result = await updateAvatar(user, avatar);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/update/password', async (req, res) => {
  try {
    const { user, password } = req.body; // Assuming the request body contains the arguments

    const result = await updatePassword(user, password);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/update/username', async (req, res) => {
  try {
    const { user, username } = req.body; // Assuming the request body contains the arguments

    const result = await updateUsername(user, username);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/update/email', async (req, res) => {
  try {
    const { user, email } = req.body; // Assuming the request body contains the arguments

    const result = await updateEmail(user, email);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

