import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Qoute from '../../components/Qoute';

describe('renders Quote', () => {
  test('should render qoute', () => {
    render(<Qoute />);
    const el = screen.getByText(/Mathematics is not about numbers/i);
    expect(el).toBeInTheDocument();
  });
});
