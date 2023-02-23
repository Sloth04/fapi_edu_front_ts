import {Route, Routes} from 'react-router-dom'
import {BooksPage} from "./pages/BooksPage";
import {AboutPage} from "./pages/AboutPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/stylesheet.css'
import React from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BooksPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
