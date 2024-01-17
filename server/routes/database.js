const express = require('express');

const dbRouter = express.Router();

const { User, Art } = require('../db/index');

// GET: to return user's profile info upon load of Profile component (could be used elsewhere)
dbRouter.get('/db/user/', (req, res) => {
  // gets mongo document _id property from request when user clicks profile
  User.findById(req.user.doc._id)
    .then((userDoc) => {
      res.status(200).send(userDoc);
    })
    .catch((err) => {
      console.error('Failed to find User by id: ', err);
      res.sendStatus(500);
    });
});

// Returns all user names (with mongo _id in an object)
dbRouter.get('/db/users/', (req, res) => {
  User.find({}, 'name')
    .then((userNames) => {
      res.status(200).send(userNames);
    })
    .catch((err) => {
      console.error('Failed to find Users: ', err);
      res.sendStatus(500);
    });
});

// USERS Routes: Update via a Put request
// '/db/user/:id'
// TODO: find out what updObj looks like to deal with 200 vs 404 status
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
      console.error('Failed to update by user id: ', err);
      res.sendStatus(500);
    });
});

// GETs all Art documents from Art table in database
dbRouter.get('/db/art/', (req, res) => {
  console.log('testing')
  Art.find({})
    .then((docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => {
      console.error('Failed to find Art: ', err);
      res.sendStatus(500);
    });
});

// GET all Art based on user sending request
dbRouter.get('db/userArt/', (req, res) => {
  // console.log(req.user);
  const { googleId } = req.user.doc;
  Art.find({ 'userGallery.googleId': googleId })
    .then((docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => {
      console.error('Failed to find Art: ', err);
      res.sendStatus(500);
    });
});

// GET all art based on :user Filter, returns all art documents of user
// *** based on 'name' property of userGallery obj ***
dbRouter.get('/db/art/:user', (req, res) => {
  console.log('/db/art/:user ', req.user);
  const { user } = req.params;
  Art.find({ 'userGallery.name': user })
    .then((userArt) => {
      // console.log('user art: ', userArt);
      if (userArt.length) {
        res.status(200).send(userArt);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(`Failed to find ${user}'s artwork: `, err);
      res.sendStatus(500);
    });
});

dbRouter.put('/db/art/:imageId', (req, res) => {
  const { imageId } = req.params;
  const fieldsToUpdate = req.body;
  Art.findOneAndUpdate({ imageId }, fieldsToUpdate, { new: true })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

dbRouter.delete('/db/art/:imageId', (req, res) => {
  const { imageId } = req.params;
  Art.findOneAndDelete({ imageId })
    .then((deleteObj) => {
      if (deleteObj) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to Delete by imageId: ', err);
      res.sendStatus(500);
    });
});

//PUT request to update User's friend array
dbRouter.put('/db/friends/', (req, res) => {
  const { friend } = req.body; // req.body should be { friend: `friend's name` }
  const { _id } = req.user.doc;
  User.findByIdAndUpdate(_id, { $push: { friends: friend } })
    .then((updObj) => {
      console.log('updObj for adding friend: ', updObj);
      res.sendStatus(200);
      // if (updObj) {
      // } else {
      //   res.sendStatus(404);
      // }
    })
    .catch((err) => {
      console.log('Failed to update user friend array: ', err);
      res.sendStatus(500);
    });
});

// GET request to get art Objects based on 'isForSale' boolean for use in Auction feature
dbRouter.get('/db/auction/', (req, res) => {
  Art.find({ isForSale: true })
    .then((forSaleArt) => {
      res.status(200).send(forSaleArt);
    })
    .catch((err) => {
      console.error('Failed to find art by isForSale: ', err);
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
      console.log('Post data (createObj) to Art: ', createObj);

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
      console.error('Failed to create Art document: ', err);
      res.sendStatus(500);
    });
});

module.exports = { dbRouter };
