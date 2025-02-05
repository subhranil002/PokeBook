import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { FaSearch } from "react-icons/fa";

function Search({ setSearchTerm }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex justify-center px-4 mb-8">
            <div className="w-full max-w-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                
                <div className="relative flex items-center bg-white/80 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                    <div className="pl-5 transition-transform duration-300 group-hover:scale-110">
                        <FaSearch
                            className={`w-6 h-6 transition-colors duration-300 ${
                                isActive ? "text-blue-600" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <input
                        id="pokemon-name-search"
                        type="text"
                        placeholder="Search for a Pokémon..."
                        className="w-full px-4 py-5 text-lg font-medium placeholder-gray-400 focus:outline-none bg-transparent peer"
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                        onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100 overflow-hidden rounded-b-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 w-0 peer-focus:w-full transition-all duration-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;