import React from 'react';
import type { MainSectionProps } from '../types/mainSection';

const Footer: React.FC<MainSectionProps> = (props) => {
  const { nextUrl, prevUrl, setBaseUrl, setPokemonData } = props;
  return (
    <div className="btn-group">
      {prevUrl && (
        <button onClick={() => {
          setPokemonData?.([]);
          setBaseUrl?.(prevUrl);
        }}
        >
          Anterior
        </button>
      )}
      {nextUrl && (
        <button onClick={() => {
          setPokemonData?.([]);
          setBaseUrl?.(nextUrl);
        }}
        >
          Siguiente
        </button>
      )}
    </div>
  );
}

export default Footer;
