import { Route, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Project from "../pages/Project/Project";
import Home from "../pages/Home/Home";
export const routes = (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/about" Component={About} />
    <Route path="/project" Component={Project} />
  </Routes>
);
