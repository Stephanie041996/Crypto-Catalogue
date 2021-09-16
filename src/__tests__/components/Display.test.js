import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

test('renders Display', () => {
  render(<Display />);
  const el = screen.getByDisplayValue('0');
  expect(el).toBeInTheDocument();
});
