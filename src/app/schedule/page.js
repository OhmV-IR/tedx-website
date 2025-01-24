"use client"
import { useEffect, useState } from "react";
const mobile = require('is-mobile');

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(true)
        var icsDownloads = document.getElementsByClassName('icsDownloadButton')
        for (let i = 0; i < icsDownloads.length; i++) {
            icsDownloads[i].addEventListener("click", (evt) => {
                console.log("test")
                const link = document.createElement("a");
                link.href = "/api/downloadEvent?eventId=" + evt.target.id
                link.download = "tedxevent.ics"
                link.click()
            })
        }
    })
    return (
        <div className="divRoot">
            <style jsx>{
                `
            #card1 {
            margin-top: 10vh !important;
            }
        .scheduleEventCard {
        display: block;
        position: relative;
        margin-left: 11vw;
        margin-top: 1vh;
        width: 87vw;
        height: 10vh;
        }
.schedule-event-name {
    position: absolute;
    color: #454545;
    left: 20%;
    top: 25%;
}
.schedule-event-time {
    position: absolute;
    color: grey;
    top: 25%;
    left: 70%;
}
.schedule-event-icon {
    position: absolute;
    left: 0%;
    top: 0%;
    height: 95%;
    width: 15%;
}
.schedule-event-details-button {
    position: absolute;
    left: 85%;
    top: 20%;
    width: 10%;
}
.event-modal-title {
    color: black !important;
}
.scheduleEventCardMobile {
    display: block;
    position: relative;
    margin-left: 0vw;
    margin-top: 1vh;
    width: 100vw;
    height: 20vh;
}
.schedule-event-name-mobile {
    position: absolute;
    color: #454545;
    left: 5%;
    top: 15%;
    width: 60%;
    height: 40%;
    text-align: center;
}
.schedule-event-time-mobile {
    position: absolute;
    color: grey;
    top: 60%;
    left: 5%;
    width: 60%;
    text-align: center;
}
.schedule-event-details-button-mobile {
    position: absolute;
    left: 70%;
    top: 37.5%;
    width: 25%;
}
.mobileModalImage {
    position: relative;
    margin-top: 5vh;
}
`}</style>
            {isMobile
                ? <><div className="badge bg-blue-lt scheduleEventCardMobile" id="card1">
                    <h1 className="schedule-event-name-mobile"><p>Reception</p></h1>
                    <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                    <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard1">
                        Details
                    </button>
                    <div className="modal fade" id="modalcard1" tabIndex="-1">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title event-modal-title">Event details</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Some additional details about the event in question(event 1). This could be a location, topic, person, or really anything you want! <br></br>
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                    <button type="button" id="event1" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card2">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard2">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard2" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event2" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card3">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard3">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard3" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event3" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card4">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard4">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard4" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event4" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card5">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard5">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard5" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event5" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card6">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard6">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard6" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event6" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card7">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard7">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard7" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event7" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card8">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard8">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard8" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event8" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card9">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard9">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard9" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event9" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCardMobile" id="card10">
                        <h1 className="schedule-event-name-mobile"><p>speech - John Doe</p></h1>
                        <h2 className="schedule-event-time-mobile"><p>8:30AM-9:00AM</p></h2>
                        <button type="button" className="btn btn-primary schedule-event-details-button-mobile" data-bs-toggle="modal" data-bs-target="#modalcard10">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard10" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                        <img className="mobileModalImage" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event10" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></>








                : <><div className="badge bg-blue-lt scheduleEventCard" id="card1">
                    <h1 className="schedule-event-name">Reception</h1>
                    <h2 className="schedule-event-time">8:30AM-9:00AM</h2>
                    <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                    <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard1">
                        Details
                    </button>
                    <div className="modal fade" id="modalcard1" tabIndex="-1">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title event-modal-title">Event details</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Some additional details about the event in question(event 1). This could be a location, topic, person, or really anything you want! <br></br>
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                    <button type="button" id="event1" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card2">
                        <h1 className="schedule-event-name">First speech - John Doe</h1>
                        <h2 className="schedule-event-time">9:05AM-9:30AM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard2">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard2" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event2" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card3">
                        <h1 className="schedule-event-name">Second speech</h1>
                        <h2 className="schedule-event-time">9:45AM - 10:00AM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard3">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard3" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event3" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card4">
                        <h1 className="schedule-event-name">Remarks</h1>
                        <h2 className="schedule-event-time">10:15AM - 10:45AM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard4">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard4" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event4" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card5">
                        <h1 className="schedule-event-name">Debate</h1>
                        <h2 className="schedule-event-time">12:30PM - 2:30PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard5">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard5" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event5" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card6">
                        <h1 className="schedule-event-name">Third speech - Jane Doe</h1>
                        <h2 className="schedule-event-time">2:45PM - 3:15PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard6">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard6" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event6" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card7">
                        <h1 className="schedule-event-name">Unveiling</h1>
                        <h2 className="schedule-event-time">3:30PM - 4:00PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard7">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard7" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event7" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card8">
                        <h1 className="schedule-event-name">Commentary</h1>
                        <h2 className="schedule-event-time">4:10PM - 5:00PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard8">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard8" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event8" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card9">
                        <h1 className="schedule-event-name">Storytelling</h1>
                        <h2 className="schedule-event-time">6:00PM-7:00PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard9">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard9" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event9" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-blue-lt scheduleEventCard" id="card10">
                        <h1 className="schedule-event-name">Closing ceremony</h1>
                        <h2 className="schedule-event-time">7:30PM - 8:30PM</h2>
                        <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                        <button type="button" className="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard10">
                            Details
                        </button>
                        <div className="modal fade" id="modalcard10" tabIndex="-1">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title event-modal-title">Event details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="event10" className="btn btn-primary icsDownloadButton">Download to Calendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></>}
        </div>
    )
}