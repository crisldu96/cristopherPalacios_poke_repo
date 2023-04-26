import React from 'react';
import { pokemonColorByType } from '../constants/pokemonColorByType';
import type { MainSectionProps } from '../types/mainSection';

const DetailPokemon: React.FC<MainSectionProps> = (props) => {
  const { pokemonSelectedData } = props;
  return (
    <>
      {!pokemonSelectedData
        ? ('Selecciona un Pokemon para ver sus detalles')
        : (
          <div className="detail-pokemon">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonSelectedData?.id}.png`}
              alt=""
              height={160}
            />
            <p className="card-name">#{pokemonSelectedData?.id}</p>
            <h1 className="card-title">{pokemonSelectedData?.name}</h1>
            <h2 className="card-subtitle">Tipo</h2>
            <div className="detail-pokemon-abilities">
              {pokemonSelectedData?.types?.map((poke: { type: any }) => {
                const nameType = poke.type.name;
                const colorCard = pokemonColorByType[nameType];

                return (
                  <div key={poke.type.name} className="type" style={{ backgroundColor: `${colorCard}` }}>
                    <span>{poke.type.name}</span>
                  </div>
                );
              })}
            </div>
            <h2 className="card-subtitle">Peso</h2>
            <p className="card-name">{pokemonSelectedData?.weight} lbs</p>
            <h2 className="card-subtitle">Sprites</h2>
            <div className="detail-pokemon-abilities">
              {Object.values(pokemonSelectedData?.sprites || {}).map((sprite: any) => {
                if (sprite !== null && typeof sprite === 'string') {
                  return (
                    <img
                      key={sprite}
                      src={sprite}
                      width={64}
                      height={64}
                      alt={sprite}
                    />
                  );
                }
                return null;
              })}
            </div>
            <h2 className="card-subtitle">Movimientos</h2>
            {pokemonSelectedData?.moves?.map((moveItem: any) => (
              <span key={moveItem?.move?.name}>{moveItem?.move?.name}</span>
            ))}

          </div>)}
    </>
  );
}

export default DetailPokemon;
