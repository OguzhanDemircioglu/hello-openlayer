import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Openlayer from "./components/Openlayer";

function App() {



    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Openlayer/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
