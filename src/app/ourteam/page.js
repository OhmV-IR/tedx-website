"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
const mobile = require('is-mobile');
export default function Page() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(mobile())
    }, []);
    return (
        <div className="divRoot">
            <style jsx>{`
#meetTeamPost {
    background-color: #080130;
}
img {
overflow-y: hidden;
}
#pageTitleMobile {
    font-family: "League Spartan", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    font-size: 100%;
    width: 50vw;
    height: 11vh;
    scale: 2.5;
    color: white;
    position: relative;
    margin-left: 23.5vw;
    margin-top: 25vh;
    text-align: center;
}
#pageTitle {
    font-family: "League Spartan", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    font-size: 100%;
    scale: 6;
    width: 60vw;
    height: 11vh;
    color: white;
    position: absolute;
    left: 20vw;
    top: 40vh;
    text-align: center;
}
#background {
    background-color: #080130;
}
* {
    overflow-x: hidden !important;
}`}</style>
            {isMobile
                ? <><div id="background" tabIndex={-25}>
                    <h1 id="pageTitleMobile" tabIndex={-10}>MEET THE TEAM</h1>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: 0, marginLeft: 0, width: "100vw"}} className="meetTeamPhotoMobile" src="/meetTheTeamDiya.png" alt="Diya Rathee, Licensee/Organizer of the event" width={1080} height={1080}></Image>
                            </div></div></div>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: "10vh", marginLeft: 0, width: "100vw"}} src="/meetTheTeamAdrien.png" alt="Adrien Borudeaux, Website manager of the event" width={1080} height={1080}></Image>
                            </div></div></div>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: "10vh", marginLeft: 0, width: "100vw"}} src="/meetTheTeamAfeef.png" alt="Afeef Imam, Editorial and Marketing manager of the event" width={1080} height={1080}></Image>
                            </div></div></div>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: "10vh", marginLeft: 0, width: "100vw"}} src="/meetTheTeamAlina.png" alt="Alina Feng, Event manager of the event" width={1080} height={1080}></Image>
                            </div></div></div>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: "10vh", marginLeft: 0, width: "100vw"}} src="/meetTheTeamKunsh.png" alt="Kunsh Sood, Sponsorships manager of the event" width={1080} height={1080}></Image>
                            </div>
                        </div></div>
                    <div className="row row-deck">
                        <div className="col-lg-4">
                            <div className="d-flex align-self-center">
                                <Image style={{position: "relative", marginTop: "10vh", marginLeft: 0, width: "100vw"}} src="/meetTheTeamJoydrutt.png" alt="Joydrutt Chakraborty, Operations member of the event" width={1080} height={1080}></Image>
                            </div>
                        </div></div>
                </div></>




                : <>            <div id="background" tabIndex={-25}>
                    <h1 id="pageTitle" tabIndex={-10}>MEET THE TEAM</h1>
                    <div className="d-flex align-self-center">
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} className="meetTeamPhoto" src="/meetTheTeamDiya.png" alt="Diya Rathee, Licensee/Organizer of the event" width={1080} height={1080}></Image>
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} src="/meetTheTeamAdrien.png" alt="Adrien Borudeaux, Website manager of the event" width={1080} height={1080}></Image>
                    </div>
                    <div className="d-flex align-self-center">
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} src="/meetTheTeamAfeef.png" alt="Afeef Imam, Editorial and Marketing manager of the event" width={1080} height={1080}></Image>
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} src="/meetTheTeamAlina.png" alt="Alina Feng, Event manager of the event" width={1080} height={1080}></Image>
                    </div>
                    <div className="d-flex align-self-center">
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} src="/meetTheTeamKunsh.png" alt="Kunsh Sood, Sponsorships manager of the event" width={1080} height={1080}></Image>
                        <Image style={{position: "relative", marginLeft: "4vw", marginTop: "40vh"}} src="/meetTheTeamJoydrutt.png" alt="Joydrutt Chakraborty, Operations member of the event" width={1080} height={1080}></Image>
                    </div>
                </div></>}
        </div>
    )
}