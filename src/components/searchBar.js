/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CryptoList from './CryptoList';

function Search() {
  const details = useSelector((state) => state.CryptoList);
  const [searchField, setSearchField] = useState('');
  const filteredCoins = details.data.filter((coin) => coin.id.includes(searchField.toLowerCase()));

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function cryptoList() {
    return (

      <CryptoList filteredCoins={filteredCoins} />
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {cryptoList()}
    </section>
  );
}

export default Search;
