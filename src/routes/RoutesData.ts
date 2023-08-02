import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import {  TRoutesDataCollection } from "./RoutesDataType";

export const routeCollection:TRoutesDataCollection[] = [
    {"destination": "/", "displayName": "Home", comp: Home},
    {"destination": "/project", "displayName": "Porject", comp: Project},
    {"destination": "/about", "displayName": "About", comp: About}
]
    
    
