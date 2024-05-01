import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./View/Page/HomePage";
import UserPage from "./View/Page/UserPage";

export const data = [
  { id: 123, name: "Kristina", age: 15 },
  { id: 234, name: "Katya", age: 8 },
  { id: 987, name: "Masha", age: 85 },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/userpage/:id", element: <UserPage /> },
]);

function App() {
  /* Create Routes*/

  return <RouterProvider router={router} />;
}

export default App;
