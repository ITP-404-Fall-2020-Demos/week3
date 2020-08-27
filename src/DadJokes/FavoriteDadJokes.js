import React from "react";

export default function FavoriteDadJokes({ jokes }) {
  return (
    <>
      <h3>Favorites</h3>

      {jokes.length > 0 && (
        <ul>
          {jokes.map((joke) => {
            return <li>{joke}</li>;
          })}
        </ul>
      )}

      {jokes.length === 0 && <p>No favorites yet</p>}
    </>
  );
}
