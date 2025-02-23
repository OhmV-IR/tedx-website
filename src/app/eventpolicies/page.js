"use client"
import {useState, useEffect} from "react";
function EventPolicies() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="divRoot">
            <style jsx>{`
        #policiesTitle {
            position: relative;
            width: 50vw;
            height: 10vw;
            margin-top: 5vh;
            font-size: 300%;
            margin-left: 25vw;
            text-align: center;
        }
        #firstHeader {
            margin-top: 5vh;
        }
        .header {
            position: relative;
            margin-top: 5vh;
            margin-left: 5vw;
            width: 50vw;
            height: 5vh;
            font-size: 200%;
        }
        #firstRule {
            position: relative;
            margin-top: -12vh;
            width: 50vw;
            font-size: 125%;
            margin-left: 25vw;
            text-align: center;
        }
        .link {
            color: #eb2008 !important;
        }
        .subtext {
            position: relative;
            margin-top: 2vh;
            margin-left: 5vw;
            width: 90vw;
        }
        `}</style>
            <div id="policies"><h1 id="policiesTitle">Event policies</h1>
            <h3 id="firstRule">Please abide by all rules set out by TED as can be seen here: <a href="https://conferences.ted.com/policies" className="link">TED Policies</a></h3>
                <h3 className="header" id="firstHeader">Policies</h3>
                <h3 className="subtext">We welcome attendees who embody the spirit of TEDx—curious, open-minded, and eager to engage in meaningful conversations. Our event is about building connections and sparking new ideas, so we encourage participants to actively contribute to discussions and collaborations.</h3>
                <h3 className="header">Refunds</h3>
                <h3 className="subtext">We do not offer refunds for any tickets purchased.</h3>
                <h3 className="header">Attendance</h3>
                <h3 className="subtext">To get the most out of the TEDx experience, we encourage attendees to stay for the entire event. Every talk and performance is designed to inspire, and being present throughout ensures you don’t miss valuable moments of insight and connection.</h3>
                <h3 className="header">During the Talks</h3>
                <h3 className="subtext">Our speakers have worked hard to craft their “idea worth spreading” for the TEDx stage. If a speaker needs a moment to re-gather their thoughts, we encourage the audience to support them with patience and applause. Please remain seated during talks, and only leave the theatre in case of an emergency to minimize distractions.</h3>
                <h3 className="header">Code of Conduct</h3>
                <h3 className="subtext">TEDx Centreville Chicopee Youth is committed to fostering an environment of curiosity, respect, and inclusivity. Attendees agree to uphold these values and maintain a space that is free from harassment of any kind. This event is about ideas, not sales, so we ask that participants refrain from aggressive promotion of businesses, products, or services.
TEDx Centreville Chicopee Youth reserves the right to remove, without refund, any attendee who does not adhere to these guidelines. If you experience or witness any behavior that goes against our code of conduct, please contact our team at <a href="mailto:tedxcentrevillechicopeeyouth@gmail.com" className="link">tedxcentrevillechicopeeyouth@gmail.com</a> with details and your contact information.</h3>
            </div>
        </div>
    )
}
export default EventPolicies;