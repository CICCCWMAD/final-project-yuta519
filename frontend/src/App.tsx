import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { AuthContext, AuthUser } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import Works from "./pages/WorksPage";
import Pokemons from "./pages/PokemonsPage";
import PokemonDetail from "./pages/PokemonPage";

const router = createBrowserRouter([
  { path: "/", element: <Works /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/works", element: <Works /> },
  { path: "/works/pokemon", element: <Pokemons /> },
  { path: "/works/pokemon/:id", element: <PokemonDetail /> },
]);

export const App = () => {
  const [authuser, setAuthUser] = useState(AuthUser);

  return (
    <AuthContext.Provider value={[authuser, setAuthUser]}>
      <CssBaseline />
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};
