import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './Homepage';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import Media from './Media';
import Blog from './Blog';
import About from './About';
import Speakers from './Speakers';
import PageNotFound from './PageNotFound';
import { IconInfoSquare, IconNotebook, IconPhoto, IconCurrencyDollar, IconCalendarEvent, IconUsers, IconMenu2 } from "@tabler/icons-react";
import './App.css';

function App() {
    const [siteMenuEnabled, setSiteMenuEnabled] = useState(false)
    return (
        <div id="approot">
        <IconMenu2 stroke={2} size={44} id="menuIcon" onClick={ToggleSiteMenu}></IconMenu2>
        <div id="siteMenu">
            <a href="/about">
            <IconInfoSquare id="aboutIcon"></IconInfoSquare>
            <h3 id="aboutLabel">About</h3>
            </a>
            <a href="/blog">
            <IconNotebook id="blogIcon"></IconNotebook>
            <h3 id="blogLabel">Blog</h3>
            </a>
            <a href="/media">
            <IconPhoto id="mediaIcon"></IconPhoto>
            <h3 id="mediaLabel">Media</h3>
            </a>
            <a href="/sponsors">
            <IconCurrencyDollar id="sponsorsIcon"></IconCurrencyDollar>
            <h3 id="sponsorsLabel">Sponsors</h3>
            </a>
            <a href="/schedule">
            <IconCalendarEvent id="scheduleIcon"></IconCalendarEvent>
            <h3 id="scheduleLabel">Schedule</h3>
            </a>
            <a href="/speakers">
            <IconUsers id="speakersIcon"></IconUsers>
            <h3 id="speakersLabel">Speakers</h3>
            </a>
        </div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
                <Route path="/sponsors" element={<Sponsors></Sponsors>}></Route>
                <Route path="/media" element={<Media></Media>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/speakers" element={<Speakers></Speakers>}></Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
    function ToggleSiteMenu(){
        if(siteMenuEnabled === true){
            document.getElementById("siteMenu").style.display = "none";
        }
        else{
            document.getElementById("siteMenu").style.display = "block";
        }
        setSiteMenuEnabled(!siteMenuEnabled);
    }
}
export default App;