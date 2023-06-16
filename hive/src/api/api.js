const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.get('/status', function(request, response) {
   const status = 'Hive API is running' 
   response.send(status);
});
