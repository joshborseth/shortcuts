import type { Component } from "solid-js";
import { Button } from "./components/ui/button";

const App: Component = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <h3>This is a solid app.</h3>
      <Button onClick={() => alert("click")}>click</Button>
    </main>
  );
};

export default App;
