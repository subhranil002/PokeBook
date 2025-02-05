# PokéBook

A dynamic and responsive React application that lets users browse, search, and view detailed information about Pokémon using the [PokeAPI](https://pokeapi.co/). Built with React, Tailwind CSS and Vite. PokéBook offers a seamless and visually appealing way to explore your favorite Pokémon.

## Table of Contents

- [PokéBook](#pokébook)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- **Pokémon Listing:** View a list of Pokémon with their images and IDs.
- **Search Functionality:** Search for a specific Pokémon using a debounced search input to reduce unnecessary API calls.
- **Detailed View:** Click on any Pokémon to view detailed information including stats, abilities, types, and attributes.
- **Pagination:** Navigate through multiple pages of Pokémon with “Previous” and “Next” buttons.
- **Responsive Design:** Fully responsive interface built with Tailwind CSS for an optimal viewing experience on all devices.

## Demo

[Live Demo](https://pokebook-subhranil.netlify.app/)

https://github.com/user-attachments/assets/6ef32b07-02b8-41fe-aed3-6d0db8015dd2

## Technologies Used

- **React** – A JavaScript library for building user interfaces.
- **React Router** – Declarative routing for React.
- **Axios** – Promise based HTTP client for fetching data from the PokeAPI.
- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
- **Vite** – A fast and lean development server and build tool.
- **ESLint** – For linting and maintaining code quality.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/subhranil002/pokebook.git
   cd pokebook
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173) (or the port specified by Vite).

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview the production build:**

   ```bash
   npm run preview
   ```

## Usage

- **Home Page:** The homepage displays a list of Pokémon with their images and formatted IDs. Use the pagination buttons at the bottom to navigate through the list.
- **Search:** Use the search bar at the top to look up a Pokémon by name. The debounced input prevents excessive API calls.
- **Details:** Click on any Pokémon card to view its detailed information including base stats, abilities, height, weight, and base experience. The details page also showcases the Pokémon’s types with color-coded badges.
- **Navigation:** Utilize React Router for smooth transitions between the list view and the details view.

## Project Structure

```plaintext
pokebook/
├── index.html              # Main HTML file
├── package.json            # Project configuration and dependencies
├── src/
│   ├── main.jsx            # Entry point; renders the React app
│   ├── index.css           # Global styles and Tailwind CSS imports
│   ├── App.jsx             # Main App component
│   ├── components/
│   │   ├── Pokedex.jsx     # Component combining search and list/details view
│   │   ├── Pokemon.jsx     # Component for displaying individual Pokémon cards
│   │   ├── PokemonDetails.jsx  # Component for displaying detailed Pokémon info
│   │   ├── PokemonList.jsx # Component for listing all Pokémon with pagination
│   │   └── Search.jsx      # Search component with debounce functionality
│   ├── hooks/
│   │   ├── useDebounce.js         # Custom hook to debounce input
│   │   ├── usePokemonDetails.js   # Custom hook to fetch Pokémon details
│   │   └── usePokemonList.js      # Custom hook to fetch and manage the Pokémon list
│   └── routes/
│       └── CustomRoutes.jsx       # Routing configuration using React Router
└── README.md               # Project documentation (this file)
```

## Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes with clear messages.
4. Push to your fork and open a Pull Request describing your changes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data.
- [Tailwind CSS](https://tailwindcss.com/) for the fantastic styling framework.
- [Vite](https://vitejs.dev/) for a blazing fast development environment.
- Icons from [React Icons](https://react-icons.github.io/react-icons/).
