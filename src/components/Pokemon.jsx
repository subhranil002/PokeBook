import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
    return (
        <Link
            to={`/pokemon/${id}`}
            className="block hover:transform hover:scale-[1.02] transition-transform duration-200"
        >
            <div className="relative p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-purple-600 rounded-lg px-3 py-1 text-sm font-bold shadow-sm">
                    #{id.toString().padStart(3, "0")}
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <div className="w-40 h-40">
                        <img
                            className="w-full h-full object-contain drop-shadow-lg hover:brightness-105 transition-all duration-200"
                            src={image}
                            alt={name}
                        />
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                            {name}
                        </h3>
                        <div className="mt-2 mx-auto w-16 h-1 bg-white/50 rounded-full" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Pokemon;