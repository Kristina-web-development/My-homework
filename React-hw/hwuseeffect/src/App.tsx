import { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import CatalogFacts from './catalogfacts';

function App() {
  const [count, setCount] = useState<number>(0);
  const [showFact, setShowFact] = useState<string>("");

  const hendleGetFact = async () => {
    const { data } = await axios.get("https://catfact.ninja/fact");
    console.log(data);
    setShowFact(data.fact);
  };

  useEffect(() => {
    hendleGetFact();
  }, [count]);

  return (
    <>
    {/* <div>{showFact.length > 0 ? showFact : "No Fact"}</div> */}
      <CatalogFacts showFact={showFact}/> 
      <button onClick={()=>setCount(count+1)}>Chenge</button> 
    </>
  )
}

export default App
