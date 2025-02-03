import { useParams } from "react-router-dom";
import usePokemondetails from "../hooks/usePokemonDetails";
import { LuSword } from "react-icons/lu";
import {
    FaFire,
    FaShieldAlt,
    FaHeartbeat,
    FaBolt,
    FaWeight,
    FaRuler,
    FaStar,
} from "react-icons/fa";

function PokemonDetails({ pokemonName }) {
    const { id } = useParams();
    const [pokemonDetailsState] = usePokemondetails(id, pokemonName);

    if (pokemonDetailsState.loading) {
        return (
            <div className="text-center text-xl text-gray-600 py-12">
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
        );
    }

    const {
        name,
        id: pokemonId,
        image,
        types,
        baseStats,
        abilities,
        height,
        weight,
        baseExperience,
    } = pokemonDetailsState.pokemon;

    const typeColors = {
        fire: "bg-orange-500",
        water: "bg-blue-500",
        grass: "bg-green-500",
        electric: "bg-yellow-400",
        psychic: "bg-purple-500",
        normal: "bg-gray-400",
        fighting: "bg-red-600",
        flying: "bg-blue-300",
        poison: "bg-purple-600",
        ground: "bg-yellow-700",
        rock: "bg-yellow-800",
        bug: "bg-lime-500",
        ghost: "bg-indigo-700",
        steel: "bg-gray-500",
        dragon: "bg-gradient-to-r from-indigo-500 to-pink-500",
        dark: "bg-gray-800",
        fairy: "bg-pink-300",
        ice: "bg-cyan-400",
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 w-full">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-[50%] min-w-fit">
                <div className={`${typeColors[types[0]]} p-6`}>
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-white capitalize">
                            {name}
                        </h1>
                        <span className="bg-white/20 text-white px-4 py-2 rounded-full text-lg">
                            #{String(pokemonId).padStart(3, "0")}
                        </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                        {types.map((type) => (
                            <span
                                key={type}
                                className={`${typeColors[type]} text-white px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-sm shadow-black`}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-8 bg-gray-50">
                    <img src={image} alt={name} className="mx-auto w-64 h-64" />
                </div>

                <div className="p-6 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            <LuSword className="inline mr-2 text-orange-500" />
                            Base Stats
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {baseStats.map((stat) => (
                                <div
                                    key={stat.name}
                                    className="p-3 bg-gray-100 rounded-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-2xl text-gray-600">
                                            {
                                                {
                                                    hp: <FaHeartbeat />,
                                                    attack: <LuSword />,
                                                    defense: <FaShieldAlt />,
                                                    "special-attack": (
                                                        <FaFire />
                                                    ),
                                                    "special-defense": (
                                                        <FaShieldAlt />
                                                    ),
                                                    speed: <FaBolt />,
                                                }[stat.name]
                                            }
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-semibold text-gray-600 flex flex-wrap max-w-36">
                                                    {stat.name.toUpperCase()}
                                                </span>
                                                <span className="text-sm font-bold text-gray-700">
                                                    {stat.value}
                                                </span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div
                                                    className="h-full rounded-full bg-orange-400"
                                                    style={{
                                                        width: `${
                                                            (stat.value / 150) *
                                                            100
                                                        }%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            <FaStar className="inline mr-2 text-yellow-500" />
                            Abilities
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {abilities.map((ability) => (
                                <div
                                    key={ability.name}
                                    className="p-4 bg-white rounded-xl border border-gray-200"
                                >
                                    <div className="flex flex-wrap justify-between items-center">
                                        <span className="font-medium text-gray-700 capitalize">
                                            {ability.name}
                                        </span>
                                        {ability.hidden && (
                                            <span className="text-xs font-semibold text-white bg-purple-500 px-2 py-1 rounded-full">
                                                Hidden
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            <FaRuler className="inline mr-2 text-blue-500" />
                            Attributes
                        </h2>
                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="mx-auto bg-white p-3 rounded-full w-fit">
                                    <FaWeight className="text-3xl text-gray-600" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Weight
                                </p>
                                <p className="text-lg font-bold text-gray-800">
                                    {weight} kg
                                </p>
                            </div>
                            <div>
                                <div className="mx-auto bg-white p-3 rounded-full w-fit">
                                    <FaRuler className="text-3xl text-gray-600" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Height
                                </p>
                                <p className="text-lg font-bold text-gray-800">
                                    {height} m
                                </p>
                            </div>
                            <div>
                                <div className="mx-auto bg-white p-3 rounded-full w-fit">
                                    <FaStar className="text-3xl text-gray-600" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Base XP
                                </p>
                                <p className="text-lg font-bold text-gray-800">
                                    {baseExperience}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
