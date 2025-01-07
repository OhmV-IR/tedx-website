'use client'
import { useState } from 'react';
import { IconInfoSquare, IconNotebook, IconPhoto, IconCurrencyDollar, IconCalendarEvent, IconUsers, IconMenu2, IconX, IconSpeakerphone } from "@tabler/icons-react";
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
          {siteMenuEnabled
              ? <IconX stroke={2} size={44} id="menuIcon" onClick={CloseSiteMenu} color="#EB0028"></IconX>
              : <IconMenu2 stroke={2} size={44} id="menuIcon" onClick={OpenSiteMenu} color="#EB0028"></IconMenu2>
          }
          <div id="siteMenu">
              <a href="/about">
                  <IconInfoSquare id="aboutIcon" color="#EB0028"></IconInfoSquare>
                  <h3 id="aboutLabel">About TED</h3>
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
                  <IconSpeakerphone id="speakersIcon" color="#EB0028"></IconSpeakerphone>
                  <h3 id="speakersLabel">Speakers</h3>
              </a>
              <a href="/schedule">
                  <IconCalendarEvent id="scheduleIcon" color="#EB0028"></IconCalendarEvent>
                  <h3 id="scheduleLabel">Schedule</h3>
              </a>
              <a href="/ourteam">
                  <IconUsers id="ourTeamIcon" color="#EB0028"></IconUsers>
                  <h3 id="ourTeamLabel" onAnimationEnd={EndAnimationSiteMenu}>Our Team</h3>
              </a>
          </div>
          <a href="/">
          <img src="/tedXLogo.png" id="eventLogo" alt="The logo of the event"></img>
          </a>
          {children}
          <div className="footerPad"></div>
          <div id="footer" tabIndex="50">
              <h3 id="tedLicenseStatement" className="text-center text-white">This independent TEDx event is operated under license from TED.</h3>
              <h3 id="tedXProgramLink" className="text-center text-white linkUnderlineWhite"><a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx program</a></h3>
          </div>
      </div>
      </body>
      </html>
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