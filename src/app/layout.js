'use client'
import { useEffect, useState } from 'react';
import { IconInfoSquare, IconNotebook, IconPhoto, IconCurrencyDollar, IconCalendarEvent, IconUsers, IconMenu2, IconX, IconSpeakerphone, IconHome } from "@tabler/icons-react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './globals.css';
import Script from 'next/script';
import Link from 'next/link';
const mobile = require('is-mobile');

export default function RootLayout({ children }) {
    const [siteMenuEnabled, setSiteMenuEnabled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(mobile())
    }, []) // site menu open/close icons don't want to click
    return (
        <html>
            <body>
                <title>TedX Centreville Chicopee Youth</title>
                <link rel="icon" href="/tedxbackground.png"></link>
                <div id="approot">
                    <Analytics></Analytics>
                    <SpeedInsights></SpeedInsights>
                    <Script src="/tabler.min.js"></Script>
                    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=League+Spartan:wght@100..900&display=swap" rel="stylesheet"></link>
                    {siteMenuEnabled
                        ? <IconX stroke={2} size={44} id="menuIcon" onClick={CloseSiteMenu} color="#EB0028"></IconX>
                        : <IconMenu2 stroke={2} size={44} id="menuIcon" onClick={OpenSiteMenu} color="#EB0028"></IconMenu2>
                    }
                    {isMobile
                        ? <div id="siteMenuMobile">
                            <Link className="link" href="/" onClick={CloseSiteMenu}>
                                <div id="firstMenuElementMobile" className="menuElementMobile">
                                    <IconHome className="menuIconMobile" id="homeIcon" color="#EB0028"></IconHome>
                                    <h3 className="menuLabelMobile" id="homeLabel">Home</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/about" onClick={CloseSiteMenu}>
                                <div className="menuElementMobile">
                                    <IconInfoSquare className="menuIconMobile" id="aboutIcon" color="#EB0028"></IconInfoSquare>
                                    <h3 className="menuLabelMobile" id="aboutLabel">About TED</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/speakers" onClick={CloseSiteMenu}>
                                <div className="menuElementMobile">
                                    <IconSpeakerphone className="menuIconMobile" id="speakersIcon" color="#EB0028"></IconSpeakerphone>
                                    <h3 className="menuLabelMobile" id="speakersLabel">Speakers</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/ourteam" onClick={CloseSiteMenu}>
                                <div className="menuElementMobile">
                                    <IconUsers className="menuIconMobile" id="ourTeamIcon" color="#EB0028"></IconUsers>
                                    <h3 className="menuLabelMobile" id="ourTeamLabel">Our Team</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/eventpolicies" onClick={CloseSiteMenu}>
                                <div className="menuElement">
                                    <IconNotebook className="menuIconMobile" id="eventPoliciesIcon" color="#EB0028"></IconNotebook>
                                    <h3 className="menuLabelMobile" id="eventPoliciesLabel" onAnimationEnd={EndAnimationSiteMenu}>Event Policies</h3>
                                </div>
                            </Link>
                        </div>

                        : <div id="siteMenu">
                            <Link className="link" href="/" onClick={CloseSiteMenu}>
                                <div id="firstMenuElement" className="menuElement">
                                    <IconHome className="menuIcon" id="homeIcon" color="#EB0028"></IconHome>
                                    <h3 className="menuLabel" id="homeLabel">Home</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/about" onClick={CloseSiteMenu}>
                                <div className="menuElement">
                                    <IconInfoSquare className="menuIcon" id="aboutIcon" color="#EB0028"></IconInfoSquare>
                                    <h3 className="menuLabel" id="aboutLabel">About TED</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/speakers" onClick={CloseSiteMenu}>
                                <div className="menuElement">
                                    <IconSpeakerphone className="menuIcon" id="speakersIcon" color="#EB0028"></IconSpeakerphone>
                                    <h3 className="menuLabel" id="speakersLabel">Speakers</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/ourteam" onClick={CloseSiteMenu}>
                                <div className="menuElement">
                                    <IconUsers className="menuIcon" id="ourTeamIcon" color="#EB0028"></IconUsers>
                                    <h3 className="menuLabel" id="ourTeamLabel">Our Team</h3>
                                </div>
                            </Link>
                            <Link className="link" href="/eventpolicies" onClick={CloseSiteMenu}>
                                <div className="menuElement">
                                    <IconNotebook className="menuIcon" id="eventPoliciesIcon" color="#EB0028"></IconNotebook>
                                    <h3 className="menuLabel" id="eventPoliciesLabel" onAnimationEnd={EndAnimationSiteMenu}>Event Policies</h3>
                                </div>
                            </Link>
                        </div>
                    }
                    {children}
                    {!siteMenuEnabled && !isMobile
                        ? <><div className="footerPad"></div><div id="footer" tabIndex="50">
                            <h3 id="tedLicenseStatement" className="text-center text-white">This independent TEDx event is operated under license from TED.</h3>
                            <h3 id="tedXProgramLink" className="text-center text-white linkUnderlineWhite"><Link className="link" href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx program</Link></h3>
                        </div></>
                        : <></>}
                    {!siteMenuEnabled && isMobile
                        ? <><div className="footerPadMobile"></div><div id="footerMobile" tabIndex="50">
                            <h3 id="tedLicenseStatementMobile" className="text-center text-white">This independent TEDx event is operated under license from TED.</h3>
                            <h3 id="tedXProgramLinkMobile" className="text-center text-white linkUnderlineWhite"><Link className="link" href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx program</Link></h3>
                        </div></>
                        : <></>
                    }
                </div>
            </body>
        </html>
    )
    function OpenSiteMenu() {
        console.log("Opening site menu");
        if (!siteMenuEnabled) {
            if (isMobile) {
                let element = document.getElementById("siteMenuMobile");
                element.style.display = "block";
                for (let i = 0; i < element.children.length; i++) {
                    let currentMenuItem = element.children.item(i).children.item(0);
                    currentMenuItem.children.item(0).style.animation = "menu-openicon 0.4s linear 0s 1 normal";
                    currentMenuItem.children.item(1).style.animation = "menu-openlabel 0.4s linear 0s 1 normal";
                }
                let menuIcon = document.getElementById("menuIcon");
                menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
                let roots = document.getElementsByClassName("divRoot");
                for (let i = 0; i < roots.length; i++) {
                    roots[i].classList.add('hide');
                }
            }
            else {
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
                for (let i = 0; i < roots.length; i++) {
                    roots[i].classList.add('hide');
                }
            }
        }
    }
    function CloseSiteMenu() {
        console.log("closing site menu")
        if (siteMenuEnabled) {
            if (isMobile) {
                let element = document.getElementById("siteMenuMobile");
                for (let i = 0; i < element.children.length; i++) {
                    let currentMenuItem = element.children.item(i).children.item(0);
                    currentMenuItem.children.item(0).style.animation = "menu-closeicon 0.4s linear 0s 1 normal";
                    currentMenuItem.children.item(1).style.animation = "menu-closelabel 0.4s linear 0s 1 normal";
                }
                let menuIcon = document.getElementById("menuIcon");
                menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
                let roots = document.getElementsByClassName("divRoot");
                for (let i = 0; i < roots.length; i++) {
                    roots[i].classList.remove('hide');
                }
            }
            else {
                let element = document.getElementById("siteMenu");
                for (let i = 0; i < element.children.length; i++) {
                    let currentMenuItem = element.children.item(i).children.item(0);
                    currentMenuItem.children.item(0).style.animation = "menu-closeicon 0.4s linear 0s 1 normal";
                    currentMenuItem.children.item(1).style.animation = "menu-closelabel 0.4s linear 0s 1 normal";
                }
                let menuIcon = document.getElementById("menuIcon");
                menuIcon.style.animation = "menuIcon-shrink 0.4s linear 0s 1 normal";
                let roots = document.getElementsByClassName("divRoot");
                for (let i = 0; i < roots.length; i++) {
                    roots[i].classList.remove('hide');
                }
            }
        }
    }
    function EndAnimationSiteMenu() {
        if (siteMenuEnabled) {
            if (isMobile) {
                document.getElementById("siteMenuMobile").style.display = "none";
            }
            else {
                document.getElementById("siteMenu").style.display = "none";
            }
        }
        else {
            document.getElementById("menuIcon").style.animation = "menuIcon-expand 0.4s linear 0s 1 normal";
        }
        setSiteMenuEnabled(!siteMenuEnabled);
    }
}