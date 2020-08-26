import React, { useState, useEffect } from "react";

export default function DadJoke() {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setJoke(response.joke);
      });
  }, []);

  return <div>Joke: {joke}</div>;
}
