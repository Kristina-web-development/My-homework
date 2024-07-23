import { useState } from 'react'
import React from "react" 
import './App.css'
import NavBar from './components/NavBar/NavBar'
import UrlForm from './components/UrlForm/UrlForm'

function App() {
 

  return (
    <>
    <main>
      < NavBar />
      < UrlForm />
    </main>
    </>
  )
}

export default App
