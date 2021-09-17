import CryptoListReducer from '../../reducers/CryptoListReducer';

describe('Detail Reducer', () => {
  it('Checks if default state is returned', () => {
    const state = CryptoListReducer(undefined, { type: '' });
    expect(state).toEqual({ data: [], loading: false, errorMessage: '' });
  });

  it('Checks if reducer is loading', () => {
    const state = CryptoListReducer({ data: [], loading: true, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: [], loading: true, errorMessage: '' });
  });
  it('Checks if reducer is Failed', () => {
    const state = CryptoListReducer({ data: [], loading: false, errorMessage: 'Unable to get Cypto INFO' }, { type: '' });
    expect(state).toEqual({ data: [], loading: false, errorMessage: 'Unable to get Cypto INFO' });
  });
  it('Checks if reducer is Successful', () => {
    const state = CryptoListReducer({ data: [{ name: 'bitcoin' }], loading: false, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: [{ name: 'bitcoin' }], loading: false, errorMessage: '' });
  });
});
