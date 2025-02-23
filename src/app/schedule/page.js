"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
const mobile = require('is-mobile');

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(mobile())
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
    }, [])
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
p {
    word-break: normal;
    white-space: normal;
    overflow: hidden;
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
                                    <p>Some additional details about the event in question(event 1). This could be a location, topic, person, or really anything you want!
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                    <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                        <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want!
                                        This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
                                        <Image style={{position: "relative", marginTop: "5vh"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                    <h1 className="schedule-event-name"><p>Reception</p></h1>
                    <h2 className="schedule-event-time">8:30AM-9:00AM</h2>
                    <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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
                        <h1 className="schedule-event-name"><p>Reception</p></h1>
                        <h2 className="schedule-event-time"><p>9:05AM-9:30AM</p></h2>
                        <Image style={{position: "absolute", left: 0, top: 0, height: "95%", width: "15%"}} src="https://www.picsum.photos/1920/1080" width={1920} height={1080} alt="Placeholder"></Image>
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
                                    <p>Some additional details about the event in question. This could be a location, topic, person, or really anything you want! 
                                    This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.</p>
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