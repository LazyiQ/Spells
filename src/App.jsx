import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import pathConstants from "./pathConstants";
import Layout from "./Layout";
import Home from "./Home";
import Spell from "./Spell";
import SpellDetail from "./SpellDetail";
import Favorites from "./Favorites";
import { createContext, useState } from "react";
export const spellContext = createContext();

const router = createBrowserRouter([
  {
    path: pathConstants.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pathConstants.SPELLS,
        children: [
          {
            index: true,
            element: <Spell />,
          },
          {
            path: pathConstants.SPELLS_DETAILS,
            element: <SpellDetail />,
          },
        ],
      },
      {
        path: pathConstants.FAVORITES,
        element: <Favorites />,
      },
    ],
  },
]);
function App() {
  const [spells, setSpells] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const filteredSpells = spells.filter((f) => favorite.includes(f.index));
  console.log(favorite);

  const handlefavorite = (favoriteid) => {
    setFavorite((oldfav) => {
      if (!oldfav.includes(favoriteid)) {
        return [...oldfav, favoriteid];
      } else {
        return oldfav.filter((f) => f != favoriteid);
      }
    });
  };

  return (
    <>
      <spellContext.Provider
        value={{
          spells: spells,
          setFavorite: setFavorite,
          favorite: favorite,

          setSpells: setSpells,
          filteredSpells: filteredSpells,
          handlefavorite: handlefavorite,
        }}
      >
        <RouterProvider router={router} />
      </spellContext.Provider>
    </>
  );
}

export default App;
