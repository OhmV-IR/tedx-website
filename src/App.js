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
import { IconInfoSquare, IconNotebook, IconPhoto, IconCurrencyDollar, IconCalendarEvent, IconUsers, IconMenu2, IconX } from "@tabler/icons-react";
import './App.css';

function App() {
    const [siteMenuEnabled, setSiteMenuEnabled] = useState(false)
    return (
        <div id="approot">
            {siteMenuEnabled
                ? <IconX stroke={2} size={44} id="menuIcon" onClick={CloseSiteMenu} color="#EB0028"></IconX>
                : <IconMenu2 stroke={2} size={44} id="menuIcon" onClick={OpenSiteMenu} color="#EB0028"></IconMenu2>
            }
            <div id="siteMenu">
                <a href="/about">
                    <IconInfoSquare id="aboutIcon" color="#EB0028"></IconInfoSquare>
                    <h3 id="aboutLabel">About</h3>
                </a>
                <a href="/media">
                    <IconPhoto id="mediaIcon" color="#EB0028"></IconPhoto>
                    <h3 id="mediaLabel">Media</h3>
                </a>
                <a href="/blog">
                    <IconNotebook id="blogIcon" color="#EB0028"></IconNotebook>
                    <h3 id="blogLabel">Blog</h3>
                </a>
                <a href="/sponsors">
                    <IconCurrencyDollar id="sponsorsIcon" color="#EB0028"></IconCurrencyDollar>
                    <h3 id="sponsorsLabel">Sponsors</h3>
                </a>
                <a href="/speakers">
                    <IconUsers id="speakersIcon" color="#EB0028"></IconUsers>
                    <h3 id="speakersLabel">Speakers</h3>
                </a>
                <a href="/schedule">
                    <IconCalendarEvent id="scheduleIcon" color="#EB0028"></IconCalendarEvent>
                    <h3 id="scheduleLabel" onAnimationEnd={EndAnimationSiteMenu}>Schedule</h3>
                </a>
            </div>
            <a href="/">
            <img src="/tedXLogo.png" id="eventLogo" alt="The logo of the event"></img>
            </a>
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
    function OpenSiteMenu() {
        if (!siteMenuEnabled) {
            let element = document.getElementById("siteMenu");
            element.style.display = "block";
            for (let i = 0; i < element.children.length; i++) {
                let currentMenuItem = element.children.item(i);
                currentMenuItem.children.item(0).style.animation = "menu-open".concat(i.toString(), "icon", " 0.4s linear 0s 1 normal");
                currentMenuItem.children.item(1).style.animation = "menu-open".concat(i.toString(), "label", " 0.4s linear 0s 1 normal");
            }
            let menuIcon = document.getElementById("menuIcon");
            menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
        }
    }
    function CloseSiteMenu() {
        if (siteMenuEnabled) {
            let element = document.getElementById("siteMenu");
            for (let i = 0; i < element.children.length; i++) {
                let currentMenuItem = element.children.item(i);
                currentMenuItem.children.item(0).style.animation = "menu-close".concat(i.toString(), "icon", " 0.4s linear 0s 1 normal");
                currentMenuItem.children.item(1).style.animation = "menu-close".concat(i.toString(), "label", " 0.4s linear 0s 1 normal");
            }
            let menuIcon = document.getElementById("menuIcon");
            menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
        }
    }
    function EndAnimationSiteMenu(){
        if(siteMenuEnabled){
            document.getElementById("siteMenu").style.display = "none";
        }
        setSiteMenuEnabled(!siteMenuEnabled);
        document.getElementById("menuIcon").style.animation = "menuIcon-expand 0.4s linear 0s 1 normal";
    }
}
export default App;