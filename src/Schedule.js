
import './Schedule.css';
function Schedule() {
    return (
        <div>
            <div className="card card-md" id="card1">                
            <div className="card-body">
                <h1 className="schedule-event-name">Reception</h1>
                <h2 className="schedule-event-time">8:30AM-9:00AM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card2">                
            <div className="card-body">
                <h1 className="schedule-event-name">First speech - John Doe</h1>
                <h2 className="schedule-event-time">9:05AM-9:30AM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card3">                
            <div className="card-body">
                <h1 className="schedule-event-name">Second speech</h1>
                <h2 className="schedule-event-time">9:45AM - 10:00AM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card4">                
            <div className="card-body">
                <h1 className="schedule-event-name">Remarks</h1>
                <h2 className="schedule-event-time">10:15AM - 10:45AM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card5">                
            <div className="card-body">
                <h1 className="schedule-event-name">Debate</h1>
                <h2 className="schedule-event-time">12:30PM - 2:30PM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card6">
                <div className="card-body">
                    <h1 className="schedule-event-name">Third speech - Jane Doe</h1>
                    <h2 className="schedule-event-time">2:45PM - 3:15PM</h2>
                    <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
                </div>
            </div>
            <div className="card card-md" id="card7">                
            <div className="card-body">
                <h1 className="schedule-event-name">Unveiling</h1>
                <h2 className="schedule-event-time">3:30PM - 4:00PM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card8">                
            <div className="card-body">
                <h1 className="schedule-event-name">Commentary</h1>
                <h2 className="schedule-event-time">4:10PM - 5:00PM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card9">                
            <div className="card-body">
                <h1 className="schedule-event-name">Storytelling</h1>
                <h2 className="schedule-event-time">6:00PM-7:00PM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
            <div className="card card-md" id="card10">                
            <div className="card-body">
                <h1 className="schedule-event-name">Closing ceremony</h1>
                <h2 className="schedule-event-time">7:30PM - 8:30PM</h2>
                <img className="schedule-event-icon" src="picsum.photos/200" alt="Placeholder"></img>
            </div></div>
        </div>
    )
}
export default Schedule;