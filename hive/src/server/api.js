const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Define the directories containing the modules
const moduleDirs = ['user', 'post'];

// Dynamically import modules from multiple directories
moduleDirs.forEach((dir) => {
  const moduleDirPath = path.join(__dirname, dir);

  // Check if the directory exists
  if (fs.existsSync(moduleDirPath)) {
    // Get the directory contents
    const files = fs.readdirSync(moduleDirPath);

    // Import and use the modules
    files.forEach((file) => {
      const modulePath = path.join(moduleDirPath, file);
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
  } else {
    console.error(`Module directory ${moduleDirPath} not found. Skipping...`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
