import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainSectionProps } from '../types/mainSection';
import Footer from '../components/Footer';

describe('Footer', () => {
  const props: MainSectionProps = {
    nextUrl: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    prevUrl: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    setBaseUrl: jest.fn(),
    setPokemonData: jest.fn(),
  };

  it('renders correctly with prevUrl and nextUrl', () => {
    const { getByText } = render(<Footer {...props} />);
    expect(getByText('Anterior')).toBeInTheDocument();
    expect(getByText('Siguiente')).toBeInTheDocument();
  });

  it('calls setPokemonData and setBaseUrl with the correct value on button click', () => {
    const { getByText } = render(<Footer {...props} />);
    fireEvent.click(getByText('Anterior'));
    expect(props.setPokemonData).toHaveBeenCalledWith([]);
    expect(props.setBaseUrl).toHaveBeenCalledWith(props.prevUrl);
    fireEvent.click(getByText('Siguiente'));
    expect(props.setPokemonData).toHaveBeenCalledWith([]);
    expect(props.setBaseUrl).toHaveBeenCalledWith(props.nextUrl);
  });

  it('renders only the nextUrl button if prevUrl is undefined', () => {
    const { queryByText, getByText } = render(
      <Footer {...props} prevUrl={undefined} />
    );
    expect(queryByText('Anterior')).not.toBeInTheDocument();
    expect(getByText('Siguiente')).toBeInTheDocument();
  });

  it('renders only the prevUrl button if nextUrl is undefined', () => {
    const { getByText, queryByText } = render(
      <Footer {...props} nextUrl={undefined} />
    );
    expect(queryByText('Siguiente')).not.toBeInTheDocument();
    expect(getByText('Anterior')).toBeInTheDocument();
  });
});
