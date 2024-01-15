const express = require('express');

const dbRouter = express.Router();

const { User, Art } = require('../db/index');

// USERS Routes: Update via a Put request
// '/db/user/:id'
dbRouter.put('/db/user/:id', (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body; // gallery: {imageid: artObj}
  User.findByIdAndUpdate(id, fieldsToUpdate)
    .then((updObj) => {
      console.log('Put data (updObj) by user ID: ', updObj);
      res.sendStatus(200);
      // res.sendStatus(404); //when we figure out what updObj looks like
    })
    .catch((err) => {
      console.error('Could not update by user id: ', err);
      res.sendStatus(500);
    });
});

// ART Routes: create() via a Post needs to come once we have the full art obj
// .deleteOne() via a Delete request
// POST '/db/art/ ==> req.body will contain fields corresponding to Art Schema
dbRouter.post('/db/art', (req, res) => {
  const artObj = req.body;
  /**
   * All of these fields are available in art object returned from GET: 'huam/object/:id'
  title: String,
  artist: String,
  artistDate: String,
  altText: String,
  description: String,
  century: String,
  date: Number,
  culture: String,
  imageId: Number,
  url: String,
  imageUrl: String,
  isForSale: False, //initialize to false
  */
  Art.create(artObj)
    .then((createOjb) => {
      console.log('Post data (createObj) to Art: ', createOjb);
      res.sendStatus(201);
      // res.sendStatus(404); //when we figure out what updObj looks like
    })
    .catch((err) => {
      console.error('Could not create Art document: ', err);
      res.sendStatus(500);
    });
});

module.exports = { dbRouter };
