import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Louyt from "./View/Louyt";
import Flag from "./View/Pages/Flag";
import MainPage from "./View/Pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Louyt />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/flag",
        element: <Flag />,
      },
      { path: "/nahui", element: <></> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
