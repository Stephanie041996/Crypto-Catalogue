/* eslint-disable react/prop-types */
import React from 'react';

function Search({ handleChange }) {
  return (
    <div
      style={{
        backgroundImage: 'url(/img/bitcoin.png)',
        backgroundPosition:
        '30% 50%',
        backgroundSize: '250px 250px',
        backgroundRepeat: 'no-repeat',
      }}
      className="search-section"
    >
      <input
        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
        type="search"
        placeholder="Search People"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
