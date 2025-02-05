import Pokemon from "./Pokemon";
import usePokemonList from "../hooks/usePokemonList.js";

function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList(
        "https://pokeapi.co/api/v2/pokemon"
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {pokemonListState.loading ? (
                        <div className="col-span-full text-center text-xl text-gray-600">
                            <div className="inline-flex items-center justify-center space-x-1 text-2xl font-semibold">
                                Loading &nbsp;
                                <span className="animate-[dots_1.5s_steps(3)_infinite]">
                                    .
                                </span>
                                <span className="animate-[dots_1.5s_steps(3)_infinite_0.5s]">
                                    .
                                </span>
                                <span className="animate-[dots_1.5s_steps(3)_infinite_1s]">
                                    .
                                </span>
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

                <div className="mt-12 flex justify-center gap-6">
                    <button
                        disabled={pokemonListState.prevUrl == null}
                        onClick={() =>
                            setPokemonListState((state) => ({
                                ...state,
                                pokedexUrl: pokemonListState.prevUrl,
                            }))
                        }
                        className={`px-8 py-3 rounded-xl font-semibold text-white shadow-lg transform transition-all duration-200 ${
                            pokemonListState.prevUrl == null
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
                        }`}
                    >
                        ← Previous
                    </button>
                    <button
                        disabled={pokemonListState.nextUrl == null}
                        onClick={() =>
                            setPokemonListState((state) => ({
                                ...state,
                                pokedexUrl: pokemonListState.nextUrl,
                            }))
                        }
                        className={`px-8 py-3 rounded-xl font-semibold text-white shadow-lg transform transition-all duration-200 ${
                            pokemonListState.nextUrl == null
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
                        }`}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PokemonList;
