import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

describe('renders Home', () => {
  test('has Title', () => {
    render(<Home />);
    const el = screen.getByText('Welcome to our page!');
    expect(el).toBeInTheDocument();
  });

  test('has Article', () => {
    render(<Home />);
    const el = screen.getByText(/Lorem ipsum dolor/i);
    expect(el).toBeInTheDocument();
  });
});
