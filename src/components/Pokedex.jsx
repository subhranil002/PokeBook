import Search from "./Search";
import PokemonList from "./PokemonList";
import { useState } from "react";
import PokemonDetails from "./PokemonDetails";

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col items-center w-full">
            <Search setSearchTerm={setSearchTerm} />
            {searchTerm.length === 0 ? (
                <PokemonList />
            ) : (
                <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
            )}
        </div>
    );
}

export default Pokedex;
