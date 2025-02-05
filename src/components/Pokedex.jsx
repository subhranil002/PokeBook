import Search from "./Search";
import PokemonList from "./PokemonList";
import { useState } from "react";
import PokemonDetails from "./PokemonDetails";

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="w-full min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12 text-center">
                    <div className="max-w-2xl mx-auto">
                        <Search setSearchTerm={setSearchTerm} />
                    </div>
                </div>

                <div className="relative">
                    {searchTerm.length === 0 ? (
                        <PokemonList />
                    ) : (
                        <div className="flex justify-center">
                            <PokemonDetails
                                key={searchTerm}
                                pokemonName={searchTerm}
                                onBack={() => setSearchTerm("")}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pokedex;