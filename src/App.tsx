import {Route, Routes} from 'react-router-dom'
import {BooksPage} from "./pages/BooksPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/stylesheet.css'

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<BooksPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
