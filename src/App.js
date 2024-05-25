import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrawByFreeHand from "./components/DrawByFreeHand";
import HorizontalMenu from "./components/menu/HorizontalMenu";
import Home from "./components/menu/Home";
import "ol/ol.css";

function App() {
    return (
        <div className="App">
            <HorizontalMenu/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/DrawByFreeHand" element={<DrawByFreeHand/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
