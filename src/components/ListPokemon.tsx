import React from 'react';
import { pokemonColorByType } from '../constants/pokemonColorByType';
import type { MainSectionProps } from '../types/mainSection';

const ListPokemon: React.FC<MainSectionProps> = (props) => {
  const { handleSelectPokemon, isLoading, pokemonListData } = props;

  return (
    <div className="list-pokemons">
      {isLoading
        ? (<h1>Cargando...</h1>)
        : pokemonListData.map((pokemonValue: any) => {
          const typePokemon: string = pokemonValue?.types[0]?.type?.name || 'default';
          const colorCard = pokemonColorByType[typePokemon];

          return (
            <div
              className="card"
              key={pokemonValue?.id}
              onClick={() => handleSelectPokemon?.(pokemonValue)}
              style={{ backgroundColor: `${colorCard}` }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonValue?.id || ''}.png`}
                height={128}
                width={128}
                alt=""
              />
              <span className="card-name">#{pokemonValue?.id}</span>
              <h2 className="card-title">{pokemonValue?.name}</h2>
            </div>
          )
        })
      }
    </div>
  );
}

export default ListPokemon;
