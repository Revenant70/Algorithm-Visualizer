import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import Sorting from "./components/Sorting";
import Searching from "./components/Searching";
import Pathfinding from "./components/Pathfinding";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="sorting" element={<Sorting />} />
      <Route path="searching" element={<Searching />} />
      <Route path="pathfinding" element={<Pathfinding />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
