import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './View/Pages/HomePage';
import About from './View/Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <About/>
  },
])

function App() {
  return (
<RouterProvider router={router} />
  )
}

export default App
