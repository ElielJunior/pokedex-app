import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    api.get(`pokemon/${name}`)
      .then(response => setPokemon(response.data));
  }, [name]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipos: {pokemon.types.map((t: any) => t.type.name).join(', ')}</p>
    </div>
  );
}