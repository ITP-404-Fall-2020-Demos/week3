import React, { useState } from "react";

export default function AsyncButton(props) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    props.onClick().then(() => {
      setIsLoading(false);
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      {isLoading ? "Loading..." : props.label}
    </button>
  );
}
