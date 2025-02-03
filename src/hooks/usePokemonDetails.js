import axios from "axios";
import { useEffect, useState } from "react";

function usePokemondetails(id, pokemonName) {
    const [pokemonDetailsState, setPokemonDetailsState] = useState({
        loading: true,
        pokemon: {
            name: null,
            id: null,
            image: null,
            weight: null,
            height: null,
            types: null,
            baseStats: [],
            abilities: [],
            baseExperience: null,
        },
    });

    async function downloadPokemon() {
        setPokemonDetailsState((state) => ({
            ...state,
            loading: true,
        }));

        let response;
        if (pokemonName) {
            response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)).data;
        } else {
            response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        }

        const baseStats = response.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
        }));

        const abilities = response.abilities.map((ability) => ({
            name: ability.ability.name,
            hidden: ability.is_hidden,
        }));

        setPokemonDetailsState((state) => ({
            ...state,
            pokemon: {
                name: response.name,
                id: response.id,
                image: response.sprites.other.dream_world.front_default,
                weight: response.weight,
                height: response.height / 10,
                types: response.types.map((t) => t.type.name),
                baseStats: baseStats,
                abilities: abilities,
                baseExperience: response.base_experience,
            },
            loading: false,
        }));
    }

    useEffect(() => {
        downloadPokemon();
    }, [id, pokemonName]);

    return [pokemonDetailsState];
}

export default usePokemondetails;
