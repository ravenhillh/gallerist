const express = require('express');

const dbRouter = express.Router();

const { User, Art } = require('../db/index');

// GET: to return user's profile info upon load of Profile component

dbRouter.get('/db/user/', (req, res) => (
  User.findById(req.user.doc._id)
    .then((userDoc) => {
      res.status(200).send(userDoc);
    })
    .catch((err) => {
      console.error('Could not find User by id: ', err);
      res.sendStatus(500);
    })
));

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

dbRouter.get('/db/art/', (req, res) => {
  Art.find({})
    .then((docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => {
      console.log('Failed to find Art: ', err);
      res.sendStatus(500);
    });
});

// ART Routes: create() via a Post needs to come once we have the full art obj
// .deleteOne() via a Delete request
// POST '/db/art/ ==> req.body will contain fields corresponding to Art Schema
dbRouter.post('/db/art', (req, res) => {
  const { art } = req.body;
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
  Art.create(art)
    .then((createObj) => {
      // console.log('Post data (createObj) to Art: ', createObj);

      // destructure relevant user info from request
      const { name, googleId } = req.user.doc;
      // find art object that was just added to db and update with user that just sent request
      Art.findByIdAndUpdate(createObj._id, { userGallery: { name, googleId } })
        .then((updObj) => {
          // console.log('Just created artObj updObj: ', updObj);

          // find user record and push art object to gallery array
          User.findOneAndUpdate({ googleId }, { $push: { gallery: art } })
            .then((userUpdObj) => {
              // console.log('User update Obj: ', userUpdObj);

              // finally send 201 status in response if following db queries were successful
              res.sendStatus(201);
            })
            .catch((err) => console.error('post /db/art user update: ', err));
        })
        .catch((err) => console.error('post /db/art Art update: ', err));
      // res.sendStatus(404); //when we figure out what updObj looks like
    })
    .catch((err) => {
      console.error('Could not create Art document: ', err);
      res.sendStatus(500);
    });
});

module.exports = { dbRouter };
