
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for serving the second HTML page (to be triggered on button click)
app.get('/index2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

// Mock video data
const videos = [
  { id: 1, title: 'Video 1', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
  { id: 2, title: 'Video 2', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
  { id: 3, title: 'Video 3', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
  { id: 4, title: 'Video 4', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
  { id: 5, title: 'Video 5', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
  { id: 6, title: 'Video 6', url: 'https://www.youtube.com/watch?v=Ta4nyuMvqok' },
];

// Endpoint to get all videos
app.get('/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
