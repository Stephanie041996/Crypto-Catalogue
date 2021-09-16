import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CryptoList from '../../components/CryptoList';
import store from '../../Store';

afterEach(cleanup);

it('should render the list of cryptos', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoList />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <CryptoList />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
