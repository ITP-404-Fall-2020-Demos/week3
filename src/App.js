import React, { useEffect, useState } from "react";
import { fetchDadJoke } from "./dadJokes";
import "./App.css";

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
    fetchDadJoke().then((joke) => {
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
          <button type="button" onClick={loadDadJoke}>
            Gimme another
          </button>
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
        <h3>Favorites</h3>

        {favorites.length > 0 && (
          <ul>
            {favorites.map((joke) => {
              return <li>{joke}</li>;
            })}
          </ul>
        )}

        {favorites.length === 0 && <p>No favorites yet</p>}
      </div>
    </div>
  );
}

export default App;
