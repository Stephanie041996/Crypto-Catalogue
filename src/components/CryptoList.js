import _ from 'lodash';
import '../Style/App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCryptoList } from '../actions/cryptoActions';
import Search from './searchBar';

const CryptoList = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('');
  const cryptoList = useSelector((state) => state.CryptoList);
  const FetchData = () => {
    dispatch(GetCryptoList());
  };
  React.useEffect(() => {
    FetchData();
  }, []);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const ShowData = () => {
    const filteredCoins = cryptoList.data.filter(
      (coin) => coin.id.includes(searchField.toLowerCase()),
    );

    if (!_.isEmpty(cryptoList.data)) {
      return (
        <div className="list-wrapper">
          {filteredCoins.map((el) => (
            <div key={el.id} className="list-item">
              <img className="list-img" src={el.image} alt="" />
              <div className="End">
                <p>{el.name}</p>
                <Link to={`/Crypto/${el.id}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (cryptoList.loading) {
      return <p>loading</p>;
    }
    if (cryptoList.errorMessage !== '') {
      return <p>{cryptoList.errorMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };
  function search() {
    return (

      <Search handleChange={handleChange} />
    );
  }
  return (
    <div>
      {search() }
      {ShowData()}
    </div>
  );
};

export default CryptoList;
