import React, { useState, useEffect } from "react";

export default function Timer() {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDuration(duration + 1);
    }, 1000);
  }, [duration]);

  return <div>{duration}</div>;
}
