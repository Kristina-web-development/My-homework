import { useState } from "react";
import "./App.css";
import ShowInformation from "./components/ShowInformation";
import NameContext from "./useContext/NameContext";

function App() {
  const [newName, setNewName] = useState("Katya");

  return (
    <NameContext.Provider value={newName}>
      <>
        <h2>Use Context</h2>
        <ShowInformation setNewName={setNewName}/>
      </>
    </NameContext.Provider>
  );
}

export default App;

/*
  Create a Context with img state (image)
  Use Provider to set the value of context
  Use useContact to show the image
  Use useState to show new image in the component
*/

