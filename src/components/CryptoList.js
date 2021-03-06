import _ from 'lodash';
import '../Style/App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCryptoList } from '../actions/cryptoActions';

const CryptoList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.CryptoList);
  const FetchData = () => {
    dispatch(GetCryptoList());
  };
  React.useEffect(() => {
    FetchData();
  }, []);

  const ShowData = () => {
    const filteredCoins = cryptoList.data.filter((coin) => coin.id.includes(search.toLowerCase()));

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

  return (
    <div>

      <div
        style={{
          backgroundImage: 'url(/img/bitcoin.png)', backgroundPosition: '30% 50%', backgroundSize: '250px 250px', backgroundRepeat: 'no-repeat',
        }}
        className="search-section"
      >

        <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />

      </div>
      {ShowData()}
    </div>
  );
};

export default CryptoList;
