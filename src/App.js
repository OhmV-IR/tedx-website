import Homepage from './Homepage';
import Schedule from './Schedule';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;