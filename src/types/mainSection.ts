export interface MainSectionProps {
  handleSelectPokemon?: ((val: any) => void) | undefined
  isLoading?: boolean;
  nextUrl?: string;
  pokemonListData?: any;
  pokemonSelectedData?: any;
  prevUrl?: string;
  searchPokemon?: ((val: any) => void) | undefined
  setBaseUrl?: ((val: any) => void) | undefined
  setPokemonData?: ((val: any) => void) | undefined
}
