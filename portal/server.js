const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form:', { name, email, message });
  // In a real app, you would send an email or save to a database here
  res.status(200).json({ success: true, message: 'Message received' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
