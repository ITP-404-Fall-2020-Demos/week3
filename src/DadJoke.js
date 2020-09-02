import React, { useState, useEffect } from "react";

export default function DadJoke() {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setJoke(responseData.joke);
      });
  }, []);

  return <div>{joke}</div>;
}
