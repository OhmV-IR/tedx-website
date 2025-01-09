"use client"
export default function Page() {
    return (
        <div id="ourTeamRoot">
            <link rel="stylesheet" href="/tabler.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet"></link>
            <style jsx>{`#ourTeamRoot {
    background-color: #080130 !important;
    position: absolute;
    left: 0vw;
    top: 10vh;
    width: 100vw;
    height: 225vh;
    z-index: -1;
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
    top: 25vh;
    text-align: center;
}
#teamPhotoAdrien {
    position: absolute;
    left: 0vw;
    top: -14vh;
    scale: 0.5;
}
#teamPhotoDiya {
    position: absolute;
    left: 40vw;
    top: -14vh;
    scale: 0.5;
}
#teamPhotoAfeef {
    position: absolute;
    left: 0vw;
    top: 55vh;
    scale: 0.5;
}
#teamPhotoAlina {
    position: absolute;
    left: 40vw;
    top: 55vh;
    scale: 0.5;
}
#teamPhotoKunsh {
    position: absolute;
    left: 0vw;
    top: 123vh;
    scale: 0.5;
}
#teamPhotoJoydrutt {
    position: absolute;
    left: 40vw;
    top: 123vh;
    scale: 0.5;
}
* {
    overflow-x: hidden !important;
}`}</style>
            <h1 id="pageTitle">MEET THE TEAM</h1>
            <img id="teamPhotoDiya" src="/meetTheTeamDiya.png" alt="Diya Rathee, Licensee/Organizer of the event"></img>
            =        <img id="teamPhotoAdrien" src="/meetTheTeamAdrien.png" alt="Adrien Borudeaux, Website manager of the event"></img>
            <img id="teamPhotoAfeef" src="/meetTheTeamAfeef.png" alt="Afeef Imam, Editorial and Marketing manager of the event"></img>
            <img id="teamPhotoAlina" src="/meetTheTeamAlina.png" alt="Alina Feng, Event manager of the event"></img>
            <img id="teamPhotoKunsh" src="/meetTheTeamKunsh.png" alt="Kunsh Sood, Sponsorships manager of the event"></img>
            <img id="teamPhotoJoydrutt" src="/meetTheTeamJoydrutt.png" alt="Joydrutt Chakraborty, Operations member of the event"></img>
        </div>
    )
}