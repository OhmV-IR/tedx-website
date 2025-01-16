'use client'
import { IconUsersGroup, IconLeaf, IconCoinEuro, IconWorld, IconFirstAidKit, IconHeartRateMonitor, IconMail } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
function Homepage() {
  const [emailInputValue, setEmailInputValue] = useState("");
  function SetLargeIconSize() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let iconsize = (0.25 * vw).toString();
    var icons = document.getElementsByClassName("largeIcon");
    for (var i = 0; i < icons.length; i++) {
      icons[i].setAttribute("width", iconsize);
      icons[i].setAttribute("height", iconsize);
    }
  }
  function OnEmailSubmit(){
    console.log("submitted email: " + emailInputValue);
  }
  function OnEmailTextChange(evt){
    setEmailInputValue(evt.target.value);
    if(evt.target.value.match("[a-z0-9].*\@[a-z0-9].*\..*")){
      document.getElementById("formEmail").classList.remove("border-danger");
      document.getElementById("formEmail").classList.add("border-success");
      document.getElementById("formEmailSubmit").disabled = false;
    }
    else{
      document.getElementById("formEmail").classList.remove("border-success")
      document.getElementById("formEmail").classList.add("border-danger");
      document.getElementById("formEmailSubmit").disabled = true;
    }
  }
  useEffect(() => {
    SetLargeIconSize();
    document.getElementById("formEmail").onchange = OnEmailTextChange;
    document.getElementById("formEmailSubmit").onclick = OnEmailSubmit;
  });
  return (
    <div id="homepage-root">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+AU+NSW&display=swap" rel="stylesheet"></link>
      <style jsx>{`
    #aboutTEDxHeader {
    position: relative;
    margin-top: 10vh;
    margin-left: 5vw;
    color: #eb2008;
    font-size: xx-large;
}
#aboutTEDxText {
    position: relative;
    margin-top: 2vh;
    margin-left: 5vw;
    width: 85vw;
}
#ctaButton {
    position: relative;
    align: center;
    width: 100vw;
    margin-top: 23vh;
}
.widerButton {
  width: 35vw;
}
button {
position: relative;
margin-left: 1.5vw;
margin-top: 5vh;
}
#sloganText {
  position: relative;
  margin-left: 10vw;
  margin-top: 40vh;
  width: 50vw;
  height: 10vh;
  text-align: center;
  font-family: "Playwrite AU NSW", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  scale: 5;
}
#iconCarousel {
  position: absolute;
  left: 68vw;
  top: 7vh;
  height: 75vh;
  width: 50vw;
  z-index: -1;
}
#iconCarouselBackground {
  position: absolute;
  left: 0vw;
  top: 0vh;
  height: 75vh;
  width: 100vw;
  z-index: -2;
}
h1 {
  overflow-y: hidden;
}
.largeIcon {
  z-index: -1;
}
    `}</style>
      <h1 id="sloganText">Power of us</h1>
      <img id="iconCarouselBackground" src="/16x9Background.png"></img>
      <div id="iconCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators visually-hidden">
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#iconCarousel" data-bs-slide-to="5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <IconUsersGroup className="largeIcon" ></IconUsersGroup>
          </div>
          <div className="carousel-item">
            <IconLeaf className="largeIcon" ></IconLeaf>
          </div>
          <div className="carousel-item">
            <IconCoinEuro className="largeIcon" ></IconCoinEuro>
          </div>
          <div className="carousel-item">
            <IconWorld className="largeIcon" ></IconWorld>
          </div>
          <div className="carousel-item">
            <IconFirstAidKit className="largeIcon" ></IconFirstAidKit>
          </div>
          <div className="carousel-item">
            <IconHeartRateMonitor className="largeIcon" ></IconHeartRateMonitor>
          </div>
          <a className="carousel-control-prev visually-hidden" data-bs-target="#iconCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next visually-hidden" data-bs-target="#iconCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <center><div id="ctaButton">
        <button type="button" className="btn btn-danger widerButton">Get tickets now!</button>
        <button type="button" className="btn btn-outline-danger widerButton" data-bs-toggle="modal" data-bs-target="#emailSubmissionModal">Sign up for mailing list</button>
      </div></center>
      <div className="modal fade" id="emailSubmissionModal" tabIndex="-1">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mailing list signup</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" name="emailTextInput" placeholder="something@example.com" id="formEmail" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary align-right" data-bs-dismiss="modal" id="formEmailSubmit" disabled={true}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div id="about-small">
        <strong><h1 id="aboutTEDxHeader">
          What is TEDx?
        </h1></strong>
        <h3 id="aboutTEDxText">
          In the spirit of ideas worth spreading, TED has created a program called TEDx.
          TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxCentreville Chicopee Youth
          , where x = independently organized TED event.
          At our TEDxCentreville Chicopee Youth event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group.
          The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
        </h3>
      </div>
    </div>
  );
}

export default Homepage;
