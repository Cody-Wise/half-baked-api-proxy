import { useState } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';
import Spinner from './Spinner';

export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('pikachu');
  const [loading, setLoading] = useState(false);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const allPokemon = await getPokemon(query);

    console.log(allPokemon.data.results);

    setPokemon(allPokemon.data.results);

    setLoading(false);

    // set the loading state to true
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="pokemon">
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon for a city
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <button>Get pokemon</button>
      </form>

      {loading ? <Spinner /> : <PokemonList pokemon={pokemon} />}

      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
