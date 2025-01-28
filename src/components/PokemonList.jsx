import Pokemon from "./Pokemon";
import usePokemonList from "../hooks/usePokemonList.js";

function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList(
        "https://pokeapi.co/api/v2/pokemon"
    );

    return (
        <div className="flex flex-col items-center py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
                {pokemonListState.loading ? (
                    <div className="col-span-full text-center text-xl text-gray-600 py-12">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                Loading...
                            </div>
                        </div>
                    </div>
                ) : (
                    pokemonListState.pokemonList.map((p) => (
                        <Pokemon
                            key={p.id}
                            name={p.name}
                            image={p.image}
                            id={p.id}
                        />
                    ))
                )}
            </div>

            <div className="mt-8 flex space-x-4">
                <button
                    disabled={pokemonListState.prevUrl == null}
                    onClick={() =>
                        setPokemonListState((state) => ({
                            ...state,
                            pokedexUrl: pokemonListState.prevUrl,
                        }))
                    }
                    className={`px-4 py-2 rounded-lg font-medium text-white shadow-md ${
                        pokemonListState.prevUrl == null
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 transition cursor-pointer"
                    }`}
                >
                    Prev
                </button>
                <button
                    disabled={pokemonListState.nextUrl == null}
                    onClick={() =>
                        setPokemonListState((state) => ({
                            ...state,
                            pokedexUrl: pokemonListState.nextUrl,
                        }))
                    }
                    className={`px-4 py-2 rounded-lg font-medium text-white shadow-md ${
                        pokemonListState.nextUrl == null
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 transition cursor-pointer"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
