function Search({ setSearchTerm }) {
    return (
        <div className="flex justify-center py-4">
            <input
                id="pokemon-name-search"
                type="text"
                placeholder="Search for a Pokémon..."
                className="w-full max-w-lg px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default Search;
