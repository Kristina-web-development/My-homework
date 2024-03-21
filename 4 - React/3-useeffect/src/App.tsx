import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0); //number, chengeJoke
  const [showJoke, setShowJoke] = useState<string>("");

  const hendleGetJoke = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data);
    setShowJoke(data.value);
  };

  useEffect(() => {
    hendleGetJoke();
  }, [count]);

  return (
    <>
      {showJoke.length > 0 && (
        <>
          <h2>{showJoke}</h2>
          <button onClick={() => setCount(count + 1)}>Next Joke</button>
        </>
      )}
    </>
  );
}

export default App;

