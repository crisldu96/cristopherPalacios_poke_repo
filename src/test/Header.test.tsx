import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders the header with the correct title and logo', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Listado de/i);
    const logoElement = screen.getByAltText(/Logo/i);
    expect(titleElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });
});
