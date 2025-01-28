import { Link } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-4">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-8 tracking-widest">
                <Link
                    to={"/"}
                    className="hover:text-red-500 transition-colors duration-300"
                >
                    PokéBook
                </Link>
            </h1>
            <CustomRoutes />
        </div>
    );
}

export default App;
