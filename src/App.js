import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchDadJoke } from "./dadJokes";
import FavoriteDadJokes from "./FavoriteDadJokes";
import AsyncButton from "./AsyncButton";

function App() {
  const [joke, setJoke] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchDadJoke().then((joke) => {
      setJoke(joke);
    });
  }, []);

  function loadDadJoke() {
    return fetchDadJoke().then((joke) => {
      setJoke(joke);
    });
  }

  function addToFavorites() {
    setFavorites(favorites.concat(joke));
    return Promise.resolve();
  }

  return (
    <>
      <div>{joke}</div>

      <AsyncButton label={"Gimme another"} onClick={loadDadJoke} />

      <AsyncButton label={"Add to Favorites"} onClick={addToFavorites} />

      <FavoriteDadJokes jokes={favorites} />

      {favorites.length === 0 && <p>No favorites yet</p>}
    </>
  );
}

export default App;
