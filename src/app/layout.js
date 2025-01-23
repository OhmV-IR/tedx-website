'use client'
import { useState } from 'react';
import { IconInfoSquare, IconNotebook, IconPhoto, IconCurrencyDollar, IconCalendarEvent, IconUsers, IconMenu2, IconX, IconSpeakerphone, IconHome } from "@tabler/icons-react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './globals.css';
export default function RootLayout({ children }) {
    const [siteMenuEnabled, setSiteMenuEnabled] = useState(false)
    return (
        <html>
            <body>
                <div id="approot">
                    <Analytics></Analytics>
                    <SpeedInsights></SpeedInsights>
                    <link rel="stylesheet" href="/tabler.min.css"></link>
                    <script src="/tabler.min.js"></script>
                    {siteMenuEnabled
                        ? <IconX stroke={2} size={44} id="menuIcon" onClick={CloseSiteMenu} color="#EB0028"></IconX>
                        : <IconMenu2 stroke={2} size={44} id="menuIcon" onClick={OpenSiteMenu} color="#EB0028"></IconMenu2>
                    }
                    <div id="siteMenu">
                        <a href="/">
                            <div id="firstMenuElement" className="menuElement">
                                <IconHome className="menuIcon" id="homeIcon" color="#EB0028"></IconHome>
                                <h3 className="menuLabel" id="homeLabel">Home</h3>
                            </div>
                        </a>
                        <a href="/about">
                            <div className="menuElement">
                                <IconInfoSquare className="menuIcon" id="aboutIcon" color="#EB0028"></IconInfoSquare>
                                <h3 className="menuLabel" id="aboutLabel">About TED</h3>
                            </div>
                        </a>
                        <a href="/media">
                            <div className="menuElement">
                                <IconPhoto className="menuIcon" id="mediaIcon" color="#EB0028"></IconPhoto>
                                <h3 className="menuLabel" id="mediaLabel">Media</h3>
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="menuElement">
                                <IconNotebook className="menuIcon" id="blogIcon" color="#EB0028"></IconNotebook>
                                <h3 className="menuLabel" id="blogLabel">Blog</h3>
                            </div>
                        </a>
                        <a href="/sponsors">
                            <div className="menuElement">
                                <IconCurrencyDollar className="menuIcon" id="sponsorsIcon" color="#EB0028"></IconCurrencyDollar>
                                <h3 className="menuLabel" id="sponsorsLabel">Sponsors</h3>
                            </div>
                        </a>
                        <a href="/speakers">
                            <div className="menuElement">
                                <IconSpeakerphone className="menuIcon" id="speakersIcon" color="#EB0028"></IconSpeakerphone>
                                <h3 className="menuLabel" id="speakersLabel">Speakers</h3>
                            </div>
                        </a>
                        <a href="/schedule">
                            <div className="menuElement">
                                <IconCalendarEvent className="menuIcon" id="scheduleIcon" color="#EB0028"></IconCalendarEvent>
                                <h3 className="menuLabel" id="scheduleLabel">Schedule</h3>
                            </div>
                        </a>
                        <a href="/ourteam">
                            <div className="menuElement">
                                <IconUsers className="menuIcon" id="ourTeamIcon" color="#EB0028"></IconUsers>
                                <h3 className="menuLabel" id="ourTeamLabel" onAnimationEnd={EndAnimationSiteMenu}>Our Team</h3>
                            </div>
                        </a>
                    </div>
                    {children}
                    {siteMenuEnabled
                    ?<div></div>
                    :<><div className="footerPad"></div><div id="footer" tabIndex="50">
                            <h3 id="tedLicenseStatement" className="text-center text-white">This independent TEDx event is operated under license from TED.</h3>
                            <h3 id="tedXProgramLink" className="text-center text-white linkUnderlineWhite"><a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx program</a></h3>
                        </div></>}
                </div>
            </body>
        </html>
    )
    function OpenSiteMenu() {
        console.log("Opening site menu");
        if (!siteMenuEnabled) {
            let element = document.getElementById("siteMenu");
            element.style.display = "block";
            for (let i = 0; i < element.children.length; i++) {
                let currentMenuItem = element.children.item(i).children.item(0);
                currentMenuItem.children.item(0).style.animation = "menu-openicon 0.4s linear 0s 1 normal";
                currentMenuItem.children.item(1).style.animation = "menu-openlabel 0.4s linear 0s 1 normal";
            }
            let menuIcon = document.getElementById("menuIcon");
            menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
            let roots = document.getElementsByClassName("divRoot");
            for(let i = 0; i < roots.length; i++){
                roots[i].classList.add('hide');
            }
        }
    }
    function CloseSiteMenu() {
        console.log("closing site menu")
        if (siteMenuEnabled) {
            let element = document.getElementById("siteMenu");
            for (let i = 0; i < element.children.length; i++) {
                let currentMenuItem = element.children.item(i).children.item(0);
                currentMenuItem.children.item(0).style.animation = "menu-closeicon 0.4s linear 0s 1 normal";
                currentMenuItem.children.item(1).style.animation = "menu-closelabel 0.4s linear 0s 1 normal";
            }
            let menuIcon = document.getElementById("menuIcon");
            menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
            let roots = document.getElementsByClassName("divRoot");
            for(let i = 0; i < roots.length; i++){
                roots[i].classList.remove('hide');
            }
        }
    }
    function EndAnimationSiteMenu() {
        if (siteMenuEnabled) {
            document.getElementById("siteMenu").style.display = "none";
        }
        else{
            document.getElementById("menuIcon").style.animation = "menuIcon-expand 0.4s linear 0s 1 normal";
        }
        setSiteMenuEnabled(!siteMenuEnabled);
    }
}