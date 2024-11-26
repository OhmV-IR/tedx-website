
import './Schedule.css';
function Schedule() {
    return (
        <div>
            <div className="badge bg-blue-lt" id="card1">
                <h1 className="schedule-event-name">Reception</h1>
                <h2 className="schedule-event-time">8:30AM-9:00AM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard1">
                    Details
                </button>
                <div class="modal fade" id="modalcard1" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question(event 1). This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card2">
                <h1 className="schedule-event-name">First speech - John Doe</h1>
                <h2 className="schedule-event-time">9:05AM-9:30AM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard2">
                    Details
                </button>
                <div class="modal fade" id="modalcard2" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card3">
                <h1 className="schedule-event-name">Second speech</h1>
                <h2 className="schedule-event-time">9:45AM - 10:00AM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard3">
                    Details
                </button>
                <div class="modal fade" id="modalcard3" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card4">
                <h1 className="schedule-event-name">Remarks</h1>
                <h2 className="schedule-event-time">10:15AM - 10:45AM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard4">
                    Details
                </button>
                <div class="modal fade" id="modalcard4" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card5">
                <h1 className="schedule-event-name">Debate</h1>
                <h2 className="schedule-event-time">12:30PM - 2:30PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard5">
                    Details
                </button>
                <div class="modal fade" id="modalcard5" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card6">
                <h1 className="schedule-event-name">Third speech - Jane Doe</h1>
                <h2 className="schedule-event-time">2:45PM - 3:15PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard6">
                    Details
                </button>
                <div class="modal fade" id="modalcard6" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card7">
                <h1 className="schedule-event-name">Unveiling</h1>
                <h2 className="schedule-event-time">3:30PM - 4:00PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard7">
                    Details
                </button>
                <div class="modal fade" id="modalcard7" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card8">
                <h1 className="schedule-event-name">Commentary</h1>
                <h2 className="schedule-event-time">4:10PM - 5:00PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard8">
                    Details
                </button>
                <div class="modal fade" id="modalcard8" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card9">
                <h1 className="schedule-event-name">Storytelling</h1>
                <h2 className="schedule-event-time">6:00PM-7:00PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard9">
                    Details
                </button>
                <div class="modal fade" id="modalcard9" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge bg-blue-lt" id="card10">
                <h1 className="schedule-event-name">Closing ceremony</h1>
                <h2 className="schedule-event-time">7:30PM - 8:30PM</h2>
                <img className="schedule-event-icon" src="https://www.picsum.photos/1920/1080" alt="Placeholder"></img>
                <button type="button" class="btn btn-primary schedule-event-details-button" data-bs-toggle="modal" data-bs-target="#modalcard10">
                    Details
                </button>
                <div class="modal fade" id="modalcard10" tabindex="-1">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title event-modal-title">Event details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Some additional details about the event in question. This could be a location, topic, person, or really anything you want! <br></br>
                                This is some really long text lorem ipsum is a true savior that we must all respect and worship in order to continue life on the planet commonly known as Earth.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Schedule;