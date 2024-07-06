import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="main darkBackGround">
      <main>
        <NavBar />
        <ToDoInput />
      
      </main>
    </div>
  );
}

export default App;
