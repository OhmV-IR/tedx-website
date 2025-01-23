"use client"
export default function Page() {
    return (
        <div className="divRoot">
            <link rel="stylesheet" href="/tabler.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet"></link>
            <style jsx>{`
#meetTeamPost {
    background-color: #080130;
}
img {
overflow-y: hidden;
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
.meetTeamPhoto {
    position: relative;
    margin-top: 40vh;
    margin-left: 4vw;
}
#background {
    background-color: #080130;
}
* {
    overflow-x: hidden !important;
}`}</style>
            <div id="background" tabIndex={-25}>
                <h1 id="pageTitle" tabIndex={-10}>MEET THE TEAM</h1>
                <div className="d-flex align-self-center">
                    <img className="meetTeamPhoto" src="/meetTheTeamDiya.png" alt="Diya Rathee, Licensee/Organizer of the event"></img>
                    <img className="meetTeamPhoto" src="/meetTheTeamAdrien.png" alt="Adrien Borudeaux, Website manager of the event"></img>
                </div>
                <div className="d-flex align-self-center">
                    <img className="meetTeamPhoto" src="/meetTheTeamAfeef.png" alt="Afeef Imam, Editorial and Marketing manager of the event"></img>
                    <img className="meetTeamPhoto" src="/meetTheTeamAlina.png" alt="Alina Feng, Event manager of the event"></img>
                </div>
                <div className="d-flex align-self-center">
                    <img className="meetTeamPhoto" src="/meetTheTeamKunsh.png" alt="Kunsh Sood, Sponsorships manager of the event"></img>
                    <img className="meetTeamPhoto" src="/meetTheTeamJoydrutt.png" alt="Joydrutt Chakraborty, Operations member of the event"></img>
                </div>
            </div>
        </div>
    )
}