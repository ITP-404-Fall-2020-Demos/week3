import React, { useState } from "react";

export default function AsyncButton({ onClick, children }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    onClick().then(() => {
      setIsLoading(false);
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
