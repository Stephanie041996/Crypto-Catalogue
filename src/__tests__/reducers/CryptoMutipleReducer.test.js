import CryptoMultipleReducer from '../../reducers/CryptoMultipleReducer';

describe('Detail Reducer', () => {
  it('Checks if default state is returned', () => {
    const state = CryptoMultipleReducer(undefined, { type: '' });
    expect(state).toEqual({ data: {}, loading: false, errorMessage: '' });
  });

  it('Checks if reducer is loading', () => {
    const state = CryptoMultipleReducer({ data: {}, loading: true, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: {}, loading: true, errorMessage: '' });
  });
  it('Checks if reducer is Failed', () => {
    const state = CryptoMultipleReducer({ data: {}, loading: false, errorMessage: 'Unable to get Cypto INFO' }, { type: '' });
    expect(state).toEqual({ data: {}, loading: false, errorMessage: 'Unable to get Cypto INFO' });
  });
  it('Checks if reducer is Successful', () => {
    const state = CryptoMultipleReducer({ data: { name: 'bitcoin' }, loading: false, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: { name: 'bitcoin' }, loading: false, errorMessage: '' });
  });
});
