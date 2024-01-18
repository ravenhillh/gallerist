import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function SearchItem({ image, idSearch }) {
  return (
    <li
      key={image.id}
    >
      <img
        style={{ width: '300px', height: 'auto' }}
        src={image.baseimageurl}
        id={image.id}
        alt={image.alttext}
      />
      <Button
        variant="outline"
        type="submit"
        onClick={() => idSearch(image.id)}
      >
        ❤️
      </Button>
    </li>
  );
}

SearchItem.propTypes = {
  image: PropTypes.object.isRequired,
  idSearch: PropTypes.func,
};

export default SearchItem;
