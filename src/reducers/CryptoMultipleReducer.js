const DefaultState = {
  loading: false,
  data: {},
  errorMessage: '',
};

const CryptoMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CRYPTO_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'CRYPTO_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'Unsucessful to load',
      };
    case 'CRYPTO_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMessage: '',
        data: {
          ...state.data,
          [action.cryptoId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default CryptoMultipleReducer;
