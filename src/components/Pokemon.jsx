import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
    return (
        <Link
            to={`/pokemon/${id}`}
            className="group block transform transition-all duration-300 hover:-translate-y-2"
        >
            <div className="relative p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] animate-rotate"></div>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full px-3 py-1 text-xs font-bold shadow-sm animate-pulse-slow">
                    #{id}
                </div>

                <div className="relative flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <img
                            className="w-full h-full object-contain drop-shadow-xl"
                            src={image}
                            alt={name}
                        />
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-extrabold text-white tracking-wide uppercase transform transition-all duration-300 group-hover:text-shadow-lg">
                            {name}
                        </h3>
                        <div className="mt-1 h-1 w-0 bg-white/30 group-hover:w-full transition-all duration-300 ease-out"></div>
                    </div>
                </div>

                <div className="absolute inset-0 -z-10 bg-purple-400/10 blur-3xl group-hover:opacity-40 opacity-0 transition-opacity duration-300"></div>
            </div>
        </Link>
    );
}

export default Pokemon;
