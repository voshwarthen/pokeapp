import React from 'react';
import Pokemon from "./Pokemon.js"

export default () => {
  const [pokemons, setPokemons] = React.useState([])

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(response => response.json())
      .then(obj => setPokemons(obj.results))
  }, [])

  return <div>
    {pokemons.map(pokemon => <Pokemon
      key={Math.random()}
      url={pokemon.url}
      name={pokemon.name}
    />)}
  </div>
};
