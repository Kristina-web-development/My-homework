import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //const [showJoke, setShowJoke] = useState<string>("");
  const showJoke = useRef(null);
  const [loader, setLoader] = useState<boolean>(false);

  const getJoke = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      console.log(data);
      //setShowJoke(data.value);
      //  if(showJoke.current !== null) {
      showJoke.current.innerText = data.value;
      //   }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // const showJoke = () => {
  //   try {
  //     divJoke.current.innerText = "https://api.chucknorris.io/jokes/random";

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log("orjgwerg").then(()=>{}).catch(()=>{})

  /* Домашка
  1. Прочитать код, понять где не понятно и написать вопросы рядом с не понятным кодой
  2. при нажатии на кнопку Получить через API шутку и вставить шутку (показать ее) с помощью useRef в нужный елемент на странице
  */

  return (
    <>
      <button onClick={getJoke} disabled={loader}>
        {loader ? "loading" : "Show Joke"}
      </button>

      <h2 ref={showJoke}></h2>
    </>
  );
}

export default App;
