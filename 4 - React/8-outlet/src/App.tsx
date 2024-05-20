import { NavLink } from "react-router-dom";

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },

])

function App() {


  return (
   
    <>
      <div>
      {/* HOMEPAGE!!!! 
       компонент Outlet позволяет вложенным маршрутам отображать 
       их element содержимое и все остальное, что визуализирует маршрут макета. 
       Элемент выхода просто используется для определения того, 
       где дочерние маршруты родительских маршрутов должны отображаться в 
       родительских маршрутах вместо новой страницы.
       Супер пример OUTLET:
       https://codesandbox.io/p/sandbox/react-router-dom-outlet-5zdtkx?file=%2Fsrc%2FApp.js
       */}
      <p>Read the follow links: </p>
      <a href="https://reactrouter.com/en/main/components/nav-link">NavLink</a>
      <a href="https://reactrouter.com/en/main/components/outlet">Outlet</a>
      </div>

      <p>Try to use the follow shit in your project.</p>
    </>
  )
}

export default App
