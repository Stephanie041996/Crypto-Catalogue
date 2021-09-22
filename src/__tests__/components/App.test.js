import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../../App';
import store from '../../Store';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('App', () => {
  it('should render the crypto list', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(
      asFragment(
        <Provider store={store}>
          <App />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
  it("Displays website's title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    const element = screen.getByText(/The Crypto Lookup/i);
    expect(element).toBeInTheDocument();
  });
});
