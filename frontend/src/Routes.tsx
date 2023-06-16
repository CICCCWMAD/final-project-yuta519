import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { ChatroomsPage } from "./pages/ChatroomsPage";
import { ChatroomPage } from "./pages/ChatroomPage";
import LoginPage from "./pages/LoginPage";
import Works from "./pages/WorksPage";
import Pokemons from "./pages/PokemonsPage";
import PokemonDetail from "./pages/PokemonPage";

const router = createBrowserRouter([
  { path: "/chatrooms", element: <ChatroomsPage /> },
  { path: "/chatrooms/:chatroomId", element: <ChatroomPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/works", element: <Works /> },
  { path: "/works/pokemon", element: <Pokemons /> },
  { path: "/works/pokemon/:id", element: <PokemonDetail /> },
]);

export const Routes = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};
