import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrawByFreeHand from "./components/DrawByFreeHand";
import HorizontalMenu from "./menu/HorizontalMenu";
import Home from "./menu/Home";
import "ol/ol.css";
import MapControls from "./components/MapControls";

function App() {
    return (
        <div className="App">
            <HorizontalMenu/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/DrawByFreeHand" element={<DrawByFreeHand/>}></Route>
                    <Route path="/MapControls" element={<MapControls/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
