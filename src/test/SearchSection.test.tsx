import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchSection from '../components/SearchSection';

describe('SearchSection component', () => {
  const mockSearchPokemon = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders search input', () => {
    const { getByPlaceholderText } = render(<SearchSection searchPokemon={mockSearchPokemon} />);
    const searchInput = getByPlaceholderText('Buscar Pokémon');
    expect(searchInput).toBeInTheDocument();
  });

  it('calls searchPokemon function on search input change', () => {
    const { getByPlaceholderText } = render(<SearchSection searchPokemon={mockSearchPokemon} />);
    const searchInput = getByPlaceholderText('Buscar Pokémon');
    fireEvent.change(searchInput, { target: { value: 'pikachu' } });
    expect(mockSearchPokemon).toHaveBeenCalledWith('pikachu');
  });
});
