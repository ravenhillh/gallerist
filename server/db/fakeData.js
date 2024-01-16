require('dotenv').config();

const { GOOGLEID } = process.env;

const yourProfile = {
  name: 'Robert Frank',
  googleId: GOOGLEID,
};

const hardcodedArtObjs = [
  {
    title: 'Oil Drops',
    artist: 'Peter Keetman',
    date: '1956',
    culture: 'German',
    imageId: 221235,
    url: 'https://www.harvardartmuseums.org/collections/object/221235',
    imageUrl: 'https://ids.lib.harvard.edu/ids/view/422514399',
    userGallery: yourProfile,
    isForSale: false,
    price: 0,
  },
  {
    title: 'Two-handled Cup and Cover',
    artist:
      "Maker's mark TP,  two pellets and mullets below, in shield-shaped punch with canted corners at top",
    date: '1667',
    culture: 'British',
    imageId: 221191,
    url: 'https://www.harvardartmuseums.org/collections/object/221191',
    imageUrl: 'https://nrs.harvard.edu/urn-3:HUAM:92516_dynmc',
    userGallery: yourProfile,
    isForSale: false,
    price: 0,
  },
  {
    title: 'Untitled (Bowery, New York City)',
    artist: 'Ben Shahn',
    date: '1936',
    culture: 'American',
    imageId: '302974',
    url: 'https://www.harvardartmuseums.org/collections/object/302974',
    imageUrl: 'https://nrs.harvard.edu/urn-3:huam:DDC112923_dynmc',
    userGallery: yourProfile,
    isForSale: false,
    price: 0,
  },
  {
    title: 'Abraham and the Angels',
    artist: 'Hans Bol',
    date: '1589',
    culture: 'Netherlandish',
    imageId: 293795,
    url: 'https://www.harvardartmuseums.org/collections/object/293795',
    imageUrl: 'https://nrs.harvard.edu/urn-3:HUAM:79089_dynmc',
    userGallery: yourProfile,
    isForSale: false,
    price: 0,
  },
  {
    title: 'In Upper Silesia',
    artist: 'Albert Birkle',
    date: '1928',
    culture: 'German',
    imageId: 221427,
    url: 'https://www.harvardartmuseums.org/collections/object/221427',
    imageUrl: 'https://ids.lib.harvard.edu/ids/view/434408744',
    userGallery: {
      name: 'Artie McBuyer',
      googleId: '1234567890',
    },
    isForSale: true,
    price: 19.99,
  },
];

module.exports = hardcodedArtObjs;
