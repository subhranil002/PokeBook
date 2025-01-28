import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        loading: true,
        pokedexUrl: url,
        prevUrl: null,
        nextUrl: null,
    });

    async function downloadPokemon() {
        setPokemonListState((state) => ({
            ...state,
            loading: true,
        }));
        const response = await axios.get(pokemonListState.pokedexUrl);
        setPokemonListState((state) => ({
            ...state,
            prevUrl: response.data.previous,
            nextUrl: response.data.next,
        }));
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) =>
            axios.get(pokemon.url)
        );
        const pokemonData = await axios.all(pokemonResultPromise);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
            };
        });
        setPokemonListState((state) => ({
            ...state,
            pokemonList: res,
            loading: false,
        }));
    }

    useEffect(() => {
        downloadPokemon();
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];
}

export default usePokemonList;
