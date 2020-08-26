import React from "react";
import Loading from "./Loading";
import Counter from "./Counter";

import "./App.css";

function App() {
  return (
    <div>
      <Loading />
      <Counter initialValue={0} />
      <Counter initialValue={0} title="My Counter" />
    </div>
  );
}

export default App;
