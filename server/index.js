const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('gallerist server listening on port 3000. http://localhost:3000');
});
