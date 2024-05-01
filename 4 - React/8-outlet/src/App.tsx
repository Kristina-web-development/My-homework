import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* HOMEPAGE!!!! */}
      <p>Read the follow links: </p>
      <a href="https://reactrouter.com/en/main/components/nav-link">NavLink</a>
      <a href="https://reactrouter.com/en/main/components/outlet">Outlet</a>
      </div>

      <p>Try to use the follow shit in your project.</p>
    </>
  )
}

export default App
