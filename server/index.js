const express = require('express');
const path = require('path');

// create another file in server called "routes"
// what routes will we need client side to access db
// PUT req to udpate art documents with secondary get request
// Req for adding art to users gallery POST

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('gallerist server listening on port 3000. http://localhost:3000');
});
