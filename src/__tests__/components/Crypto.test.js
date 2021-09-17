import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Crypto from '../../components/Crypto';
import store from '../../Store';

afterEach(cleanup);

it('should render the list of cryptos', () => {
  const match = { params: { id: 'bitcoin' } };
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Crypto match={match} />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <Crypto match={match} />
      </Provider>,
    ),
  ).toMatchSnapshot();
});

describe('Crypto DOM', () => {
  const match = { params: { id: 'bitcoin' } };
  it('renders crypto content correctly', () => {
    const Cryp = renderer.create(
      <Provider store={store}>
        <Crypto match={match} />
        ,
      </Provider>,
    ).toJSON();
    expect(Cryp.name).not.toBe('random');
  });
});
