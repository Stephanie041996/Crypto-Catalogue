/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetCrypto } from '../actions/cryptoActions';
import '../Style/App.css';

const Crypto = (props) => {
  const test = props;
  const testing = test.match.params;
  const cryptoId = testing.id;
  const dispatch = useDispatch();
  const cryptoState = useSelector((state) => state.id);
  React.useEffect(() => {
    dispatch(GetCrypto(cryptoId));
  }, [cryptoId, dispatch]);

  console.log(test.match);
  const ShowData = () => {
    if (!_.isEmpty(cryptoState.data[cryptoId])) {
      const cry = cryptoState.data[cryptoId][0];
      return (
        <div className="Single-Crypto-Wrapper">
          <img src={cry.image} alt="" />
          <h4>
            Name :
            {cry.name}
          </h4>
          <h4>
            Symbol :
            {cry.symbol}
          </h4>
          <h4>
            Price : $
            {cry.current_price}
          </h4>
          {cry.price_change_percentage_24h < 0 ? (
            <h4 className="percent-red">
              Price change last 24hr :
              {cry.price_change_percentage_24h.toFixed(2)}
              {' '}
              %
            </h4>
          ) : (
            <h4 className="percent-green">
              Price change last 24hr :
              {cry.price_change_percentage_24h.toFixed(2)}
              {' '}
              %
            </h4>
          )}

        </div>
      );
    }
    if (cryptoState.loading) {
      return <p>loading</p>;
    }
    if (cryptoState.errorMessage !== '') {
      return <p>{cryptoState.errorMessage}</p>;
    }
    return <p>ERRROR</p>;
  };
  return (
    <div className="cryp">
      <h2>Crypto Info</h2>
      <h2>{ShowData()}</h2>

    </div>
  );
};

Crypto.defaultProps = {
  testing: {
    path: '/Crypto/:id', url: '/Crypto/bitcoin', isExact: true, params: { id: 'bitcoin' },
  },
  id: 'bitcoin',
};
export default Crypto;
