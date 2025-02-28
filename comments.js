// Create web server
// Start server
// Create a route for comments
// Create a form for comments
// Create a post route for comments
// Create a get route for comments
// Create a view for comments
// Add comments to the view
// Create a comments array
// Push comments to the comments array
// Redirect to the comments page

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

const comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/comments');
});

app.get('/comments', (req, res) => {
  res.render('comments.ejs', { comments: comments });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});