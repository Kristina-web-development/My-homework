
import { FC, useState } from "react";
import "./App.css";
import NewComponent from "./NewComponent";

const names = [
    {name: "Kristina"},
    {name: "Katya"},
    {name: "Dasha"},
    {name: "Tanya"}
]


const App: FC = () =>{
  const [number, setNumber] = useState<number>(0)
  const [imageUrls, setImageUrls] = useState<string>()
  const btnTextPlus = "+ Plus"
  const btnTextMinus = "- Minus"

  const changeNumber = () => {
    setNumber(number +1)
  }

  return (
    <>
    <h1>List of name (array)</h1>
    {/* {names.map((user, index)=>{
      return <NewComponent key={index} userName={user.name}/>
    })} */}

    {names.map((user, index)=> (
      <NewComponent key={index} userName={user.name}/>
    ))}

    

      <h1>Regular</h1>
    <NewComponent userName={"Kristina"}/>
    <NewComponent userName={"Katya"}/>
    <NewComponent userName={"Masha"}/>


      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, at
        exercitationem magni sint, quidem quisquam perspiciatis pariatur,
        sapiente officiis deserunt dolore quas ab? Reiciendis debitis voluptatum
        voluptas atque nam sunt.
      </p>
      <h2>{number}</h2>
      {/* <button onClick={changeNumber}>{btnText}</button> */}
      <button onClick={()=>setNumber(number +1)}>{btnTextPlus}</button>
      <button onClick={()=>setNumber(number -1)}>{btnTextMinus}</button>
      <button onClick={()=>setNumber(0)}>0</button>

      {/* HOMEWORK: 
      1. Create a minus (-1) btn and btn that change the number to zero
      2. Create a list (arrya) of images (url)
      2.1. Create a image component with props ({imageurl}) => <img src={} alt="" />
      2.2. Create an intarface of component props
      2.3. By using map show each image in the app component by using image component
      */}
    </>
  );
}

export default App;
