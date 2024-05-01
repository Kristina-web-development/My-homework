import { useState } from 'react'
import './App.css'
import imageContext from './useContext/imageContext';
import ShowImage from './components/showImage';

function App() {
  const [newImage, setNewImage] = useState("https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg");

  return (
    <imageContext.Provider value={newImage}>
    <>
      <h2>Use Context Image</h2>
      <ShowImage setNewImage={setNewImage}/>
    </>
    </imageContext.Provider>
  )
}

export default App
