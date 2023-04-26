import React, { useEffect, useState } from 'react';

interface SearchSectionProps {
  searchPokemon: (val: string) => Promise<any>
}

const SearchSection: React.FC<SearchSectionProps> = (props) => {
  const { searchPokemon } = props;
  const [valueSearch, setValueSearch] = useState<string>('');

  const handleValueSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValueSearch(e.target.value);
  };

  const handleGetPokemon = async (e: string): Promise<any> => {
    await searchPokemon(e);
  };

  useEffect(() => {
    handleGetPokemon(valueSearch);
  }, [valueSearch]);

  return (
    <div className="search-section">
      <input
        className="search-input"
        type="search"
        value={valueSearch}
        placeholder="Buscar Pokémon"
        onChange={handleValueSearch}
      ></input>
    </div>
  );
};

export default SearchSection;
