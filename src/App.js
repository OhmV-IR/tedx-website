import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import Media from './Media';
import Blog from './Blog';
import About from './About';
import Speakers from './Speakers';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
                <Route path="/sponsors" element={<Sponsors></Sponsors>}></Route>
                <Route path="/media" element={<Media></Media>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/speakers" element={<Speakers></Speakers>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;