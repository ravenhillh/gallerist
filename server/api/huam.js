const axios = require('axios');
const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { APIKEY } = process.env;

// import db exports

// Initial api request for images results with a user-supplied keyword
const getArtImages = (keyword) => {
  axios(`https://api.harvardartmuseums.org/image?q=${keyword}&apikey=${APIKEY}`)
    .then((records) => {
      // After DB functions are imported, create document for each artwork
      console.log(records.data);
      /**
       imageid
       alttext
       baseimageurl
       */
    })
    .catch((err) => console.error(err));
};

// Secondary api request for full object associated with imageid from above image objects
const getArtObj = (imageid) => {
  axios(`https://api.harvardartmuseums.org/object?q=images.imageid:${imageid}&apikey=${APIKEY}`)
    .then((artObj) => {
      // After DB functions are imported, create/update document for the particular artwork
      console.log('Art Obj: ', artObj);
      /**
        images.baseimageurl
        images.description
        century, culture
        people.displayname
        people.displaydate
      */
    })
    .catch((err) => console.error(err));
};

module.exports = { getArtImages, getArtObj };
