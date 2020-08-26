import React from "react";
import Loading from "./Loading";
import Counter from "./Counter";
import Timer from "./Timer";
import DadJoke from "./DadJoke";

import "./App.css";

function App() {
  return (
    <div>
      <DadJoke />
      <Timer />
      <Loading />
      <Counter initialValue={0} />
      <Counter initialValue={0} title="My Counter" />
    </div>
  );
}

export default App;
