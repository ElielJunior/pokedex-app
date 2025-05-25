import { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('pokemon?limit=20')
      .then(response => setPokemons(response.data.results));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Pokédex</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemons.map((poke) => (
          <PokemonCard
            key={poke.name}
            name={poke.name}
            onClick={() => navigate(`/pokemon/${poke.name}`)}
          />
        ))}
      </div>
    </div>
  );
}