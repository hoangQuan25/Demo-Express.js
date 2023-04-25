const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3500;

// Use body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views.html');
});

// Define a route to handle POST requests to the /submit endpoint
app.post('/submit', (req, res) => {
  const name = req.body.name; // Get the value of the name field from the request body
  console.log(`Received name: ${name}`);
  res.send(`Received name: ${name}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
