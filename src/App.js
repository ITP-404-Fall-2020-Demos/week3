import React, { useEffect, useState } from "react";
import { fetchDadJoke } from "./dadJokes";
import "./App.css";
import FavoriteDadJokes from "./DadJokes/FavoriteDadJokes";
import AsyncButton from "./AsyncButton";

function App() {
  const [joke, setJoke] = useState();
  const [favorites, setFavorites] = useState([]);
  const [isFavoriteButtonDisabled, setIsFavoriteButtonDisabled] = useState(
    false
  );

  useEffect(() => {
    fetchDadJoke().then(setJoke);
  }, []);

  function isJokeFavorited(joke) {
    return favorites.includes(joke);
  }

  function determineIfFavoriteButtonShouldBeDisabled(joke) {
    if (isJokeFavorited(joke)) {
      setIsFavoriteButtonDisabled(true);
    } else {
      setIsFavoriteButtonDisabled(false);
    }
  }

  function loadDadJoke() {
    return fetchDadJoke().then((joke) => {
      setJoke(joke);
      determineIfFavoriteButtonShouldBeDisabled(joke);
    });
  }

  function addToFavorites() {
    setFavorites(favorites.concat(joke));
    setIsFavoriteButtonDisabled(true);
  }

  return (
    <div class="container">
      <main>
        <h1>Dad Jokes</h1>
        <div>{joke}</div>
        <div className="button-container">
          <AsyncButton onClick={loadDadJoke}>Gimme another</AsyncButton>
          <button
            type="button"
            onClick={addToFavorites}
            disabled={isFavoriteButtonDisabled}
          >
            Add to Favorites
          </button>
        </div>
      </main>
      <div>
        <FavoriteDadJokes jokes={favorites} />
      </div>
    </div>
  );
}

export default App;
