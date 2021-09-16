import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Route from '../../components/Route';

describe('renders Navbar', () => {
  test('has link to Home', () => {
    render(<Route />);
    const el = screen.getByText(/Home/i);
    expect(el).toBeInTheDocument();
  });
  test('has link to Calculator', () => {
    render(<Route />);
    const el = screen.getByText(/Calculator/i);
    expect(el).toBeInTheDocument();
  });
  test('has link to Quote', () => {
    render(<Route />);
    const el = screen.getByText(/Qoute/i);
    expect(el).toBeInTheDocument();
  });
});
