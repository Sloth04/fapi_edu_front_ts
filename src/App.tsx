import {Route, Routes} from 'react-router-dom'
import {BooksPage} from "./pages/BooksPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";

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
