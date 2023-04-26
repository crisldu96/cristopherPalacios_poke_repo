import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Listado de</h1>
      <img src="/static/logos/pokemon_logo.svg" width={125} height={40} alt="Logo" />
    </header>
  );
};

export default Header;
