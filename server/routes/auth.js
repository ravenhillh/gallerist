const express = require('express');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.render('login');
});

module.exports = { authRouter };
