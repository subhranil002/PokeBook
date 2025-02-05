import CustomRoutes from "./routes/CustomRoutes";

function App() {
    return (
        <div className="flex flex-col items-center justify-center pt-4">
            <h1
                className="text-6xl md:text-7xl font-extrabold text-center mb-12 cursor-pointer"
            >
                <a href="/">
                    <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(255,79,0,0.4)]">
                        PokéBook
                    </span>
                </a>
            </h1>
            <CustomRoutes />
        </div>
    );
}

export default App;
