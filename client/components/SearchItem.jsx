import React from 'react';
import PropTypes from 'prop-types';

function SearchItem({ image, idSearch }) {
  return (
    <li
      key={image.id}
    >
      <img
        style={{ width: '250px', height: 'auto' }}
        src={image.baseimageurl}
        id={image.id}
        alt={image.alttext}
      />
      <button
        type="submit"
        onClick={() => idSearch(image.id)}
      >
        ❤️
      </button>
    </li>
  );
}

SearchItem.propTypes = {
  image: PropTypes.object.isRequired,
  idSearch: PropTypes.func,
};

export default SearchItem;
