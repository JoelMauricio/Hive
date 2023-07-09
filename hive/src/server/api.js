const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Get the directory path for the user modules
const userModulesDir = path.join(__dirname, 'user');

// Dynamically import all modules in the user directory
fs.readdirSync(userModulesDir).forEach((file) => {
  const modulePath = path.join(userModulesDir, file);
  const module = require(modulePath);

  // Check if the module is a valid middleware function or router
  if (typeof module === 'function') {
    app.use(module);
  } else if (typeof module === 'object' && typeof module.router === 'function') {
    app.use(module.router);
  } else {
    console.error(`Invalid module in ${modulePath}. Skipping...`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
