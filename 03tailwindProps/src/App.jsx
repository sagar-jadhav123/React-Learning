import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Sagar",
    age: 24,
  };
  let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-orange-500 rounded-md p-4 m-5">Tailwind</h1>

      <Card username="Sagar" btnText="Click Me" />
      <Card username="Sagar and React" btnText="Visit Me" />
    </>
  );
}

export default App;
