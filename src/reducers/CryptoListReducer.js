const DefualtState = {
  loading: false,
  data: [],
  errorMessage: '',

};

const CryptoListReducer = (state = DefualtState, action) => {
  switch (action.type) {
    case 'CYPTO_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'CYPTO_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: '',
      };
    case 'CYPTO_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'Unable to get Cypto INFO',
      };
    default:
      return state;
  }
};

export default CryptoListReducer;
