import React from 'react';
import { render } from '@testing-library/react';
import DetailPokemon from '../components/DetailPokemon';

describe('DetailPokemon', () => {
  test('renders correctly when no Pokemon is selected', () => {
    const { getByText } = render(<DetailPokemon />);
    const messageElement = getByText('Selecciona un Pokemon para ver sus detalles');
    expect(messageElement).toBeInTheDocument();
  });

  test('renders correctly when a Pokemon is selected', () => {
    const pokemonSelectedData = {
      id: 25,
      name: 'Pikachu',
      weight: 60,
      types: [
        { type: { name: 'electric' } }
      ],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      moves: [
        { move: { name: 'quick-attack' } },
        { move: { name: 'thunderbolt' } }
      ]
    };
    const { getByText, getByAltText } = render(<DetailPokemon pokemonSelectedData={pokemonSelectedData} />);
    const nameElement = getByText('Pikachu');
    const idElement = getByText('#25');
    const weightElement = getByText('60 lbs');
    const typeElement = getByText('electric');
    const spriteElement = getByAltText('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
    const quickAttackElement = getByText('quick-attack');
    const thunderboltElement = getByText('thunderbolt');
    expect(nameElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
    expect(weightElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(spriteElement).toBeInTheDocument();
    expect(quickAttackElement).toBeInTheDocument();
    expect(thunderboltElement).toBeInTheDocument();
  });
});
