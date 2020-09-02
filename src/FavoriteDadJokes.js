import React from "react";

export default function FavoriteDadJokes(props) {
  return (
    <>
      {props.jokes.length > 0 && (
        <ul>
          {props.jokes.map((joke) => {
            return <li key={joke}>{joke}</li>;
          })}
        </ul>
      )}
    </>
  );
}
