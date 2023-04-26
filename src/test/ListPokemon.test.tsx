import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPokemon from '../components/ListPokemon';

describe('ListPokemon', () => {
  const mockHandleSelectPokemon = jest.fn();
  const mockPokemonListData = [
    { id: 1, name: 'Bulbasaur', types: [{ type: { name: 'grass' } }] },
    { id: 2, name: 'Charmander', types: [{ type: { name: 'fire' } }] },
    { id: 3, name: 'Squirtle', types: [{ type: { name: 'water' } }] },
  ];

  it('should render "Cargando..." when isLoading is true', () => {
    render(<ListPokemon isLoading={true} pokemonListData={[]} handleSelectPokemon={mockHandleSelectPokemon} />);
    const loadingText = screen.getByText('Cargando...');
    expect(loadingText).toBeInTheDocument();
  });

  it('should render the list of Pokemon when isLoading is false', () => {
    render(<ListPokemon isLoading={false} pokemonListData={mockPokemonListData} handleSelectPokemon={mockHandleSelectPokemon} />);
    const pokemonCards = screen.getAllByRole('button');
    expect(pokemonCards.length).toEqual(3);
  });
});
