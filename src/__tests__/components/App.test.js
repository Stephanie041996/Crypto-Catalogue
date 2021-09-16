import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

describe('renders App', () => {
  render(<App />);

  test('has Text element', () => {
    const el = screen.getByText('Calculator App');
    expect(el).toBeInTheDocument();
  });
});
