import React, { useEffect, useState } from 'react';
import { getAxiosRequest } from './conexion/Conexion';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ListPokemon from './components/ListPokemon';
import Footer from './components/Footer';
import './style/Header.css';
import './style/MainSections.css';
import './style/Footer.css';
import './style/App.css';
import DetailPokemon from './components/DetailPokemon';

const App: React.FC = () => {
  const [baseUrl, setBaseUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState<string>();
  const [prevUrl, setPrevUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [pokemonSelected, setPokemonSelected] = useState();

  const getPokemon = async (resultArray: any): Promise<void> => {
    const requestAll = resultArray.map(async (item: { url: string }) => await getAxiosRequest(item.url));
    const responseVersionActas = await Promise.all(requestAll);
    setPokemonData(responseVersionActas);
  };

  const pokeFun = async (): Promise<void> => {
    if (pokemonData.length > 0) {
      setPokemonData([]);
    }
    setIsLoading(true);
    const res = await getAxiosRequest(baseUrl);
    setNextUrl(res.next);
    setPrevUrl(res.previous);
    await getPokemon(res.results);
    setIsLoading(false);
  };

  const getPokemonByName = async (pokemonValue: string): Promise<any> => {
    if (pokemonValue) {
      try {
        const responseApi = await getAxiosRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`);
        setPokemonData((state: any[]) => {
          state = [responseApi];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      if (pokemonData.length > 0) {
        setPokemonData([]);
        pokeFun();
      }
    }
  };

  useEffect(() => {
    pokeFun();
  }, [baseUrl]);

  return (
    <div className="App">
      <Header />
      <SearchSection searchPokemon={getPokemonByName} />
      <div className="main-container">
        <ListPokemon
          isLoading={isLoading}
          pokemonListData={pokemonData}
          handleSelectPokemon={(value) => { setPokemonSelected(value) }}
        />
        <DetailPokemon pokemonSelectedData={pokemonSelected} />
      </div>
      <Footer
        nextUrl={nextUrl}
        prevUrl={prevUrl}
        setBaseUrl={setBaseUrl}
        setPokemonData={setPokemonData}
      />
    </div>
  );
}

export default App;
