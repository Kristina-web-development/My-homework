import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [showJoke, setShowJoke] = useState<string>(""); // 1. Что за бред!!!!!????
  const divText = useRef(null);
  const btn = useRef(null);
  const [loader, setLoader] = useState<boolean>(false); 
  console.log(divText);

  const getJock = async () => {
    try {
      setLoader(true); 
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      console.log(data);
      setShowJoke(data.value);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false)
    }
  };

  const changeText = () => {
    try {
      divText.current.innerText = "New Text";
      btn.current.style.background = "red";
    } catch (error) {
      console.log(error);
    } 
  };

  // console.log("orjgwerg").then(()=>{}).catch(()=>{})

  /* Домашка
  1. Прочитать код, понять где не понятно и написать вопросы рядом с не понятным кодой
  2. при нажатии на кнопку Получить через API шутку и вставить шутку (показать ее) с помощью useRef в нужный елемент на странице
  */


  return (
    <>
      <div ref={divText}>Text</div>
      <button onClick={changeText} ref={btn}>
        Chenge Text
      </button>
      <button onClick={getJock} disabled={loader}>{loader ? "loading": "Get Joke"}</button>

      <h2>{showJoke}</h2>
    </>
  );
}

export default App;
