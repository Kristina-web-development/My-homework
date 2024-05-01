import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../src/Pages/About";
import HomePage from "./Pages/HomePage";
import IdPage from "./Pages/IdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/about/:id", element: <IdPage/> },
  { path: "/about/:id/:postId", element: <IdPage/> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
