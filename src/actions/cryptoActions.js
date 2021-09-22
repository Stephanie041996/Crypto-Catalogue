import axios from 'axios';

export const GetCryptoList = () => async (dispatch) => {
  try {
    dispatch({
      type: 'CYPTO_LIST_LOADING',
    });

    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
    dispatch({
      type: 'CYPTO_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'CYPTO_LIST_FAIL',
    });
  }
};

export const GetCrypto = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'CYPTO_MULTIPLE_LOADING',
    });

    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    dispatch({
      type: 'CRYPTO_MULTIPLE_SUCCESS',
      payload: res.data,
      cryptoId: id,
    });
  } catch (e) {
    dispatch({
      type: 'CYPTO_MULTIPLE_FAIL',
    });
  }
};
