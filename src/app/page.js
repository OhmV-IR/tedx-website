'use client'
import { IconUsersGroup, IconLeaf, IconCoinEuro, IconWorld, IconFirstAidKit, IconHeartRateMonitor, IconMail, IconCalendar, IconClock } from '@tabler/icons-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
const mobile = require('is-mobile')

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
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  console.log("submitted email: " + emailInputValue);
  fetch("/api/writeEmail?email=" + emailInputValue, requestOptions).then((res) => {
    if(res.status == 200){
      console.log("Email submitted successfully");
      document.getElementById("successAlert").style.display = "block";
      setTimeout(() => {
        document.getElementById("successAlert").style.display = "none";
      }, bannerDisplayTime);
    }
    else{
      console.error("Email submission failed");
      document.getElementById("failedAlert").style.display = "block";
      setTimeout(() => {
        document.getElementById("failedAlert").style.display = "none";
      }, bannerDisplayTime);
    }
  })
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


function Homepage() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [isMobile, setIsMobile] = useState(false)
  const bannerDisplayTime = 4000; // in ms
  useEffect(() => {
    SetLargeIconSize();
    document.getElementById("formEmail").onchange = OnEmailTextChange;
    document.getElementById("formEmailSubmit").onclick = OnEmailSubmit;
    setIsMobile(mobile());
  }, []);
  return (
    <div className="divRoot">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+AU+NSW&display=swap" rel="stylesheet"></link>
      <style jsx>{`
    #aboutTEDxHeader {
    position: relative;
    margin-top: 2vh;
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
    margin-top: 78vh;
}
#eventInfo {
  position: relative;
  align: center;
  width: 100vw;
  height: 25vh;
  margin-top: 0vh;
}
#eventInfoMobile {
  position: relative;
  align: center;
  width: 100vw;
  height: 35vh;
  margin-top: -5vh;
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
h1 {
  overflow-y: hidden;
}
.largeIcon {
  z-index: -1;
}
.iconWhite {
  color: white !important;
  z-index: -1;
}
#successAlert {
  display: none;
}
#failedAlert {
  display: none;
}



#iconCarouselMobile {
  position: relative;
  margin-left: 35.5vw;
  margin-top: 12.5vh;
  height: 20vh;
  width: 50vw;
  z-index: -1;
}
#sloganTextMobile {
  position: relative;
  margin-left: 22.5vw;
  margin-top: 22.5vh;
  width: 50vw;
  height: 10vh;
  text-align: center;
  font-family: "Playwrite AU NSW", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  scale: 3;
}
#aboutTEDxHeaderMobile {
    position: relative;
    margin-top: 0vh;
    margin-left: 5vw;
    color: #eb2008;
    font-size: xx-large;
}
#aboutTEDxTextMobile {
    position: relative;
    margin-top: 2vh;
    margin-left: 5vw;
    width: 85vw;
}
#ctaButtonMobile {
    position: relative;
    align: center;
    width: 100vw;
    margin-top: 65vh;
}
.widerButtonMobile {
  width: 45vw;
}
#blackBg {
  position: absolute;
  left: 65vw;
  top: 0;
  width: 35vw;
  height: 75vh;
  background-color: black;
}
#eventSlogan {
  color: white;
  position: absolute;
  left: 78vw;
  top: 80vh;
  font-size: 132%;
  scale: 5;
  height: 30vh;
  text-align: center;
  font-family: "Bad Script", serif;
  font-weight: 400;
  font-style: normal;
}
#eventSloganMobile {
  color: white;
  position: absolute;
  left: 43.5vw;
  top: 48vh;
  font-size: 132%;
  scale: 4;
  height: 30vh;
  text-align: center;
  font-family: "Bad Script", serif;
  font-weight: 400;
  font-style: normal;
}
.eventInfoText {
  font-size: 150%;
  text-align: center;
}
    `}</style>
    {isMobile
    ?<><div id="successAlert" className="alert alert-success" role="alert">Mailing list signup successful!</div>
    <div id="failedAlert" className="alert alert-danger" role="alert">Mailing list signup failed!</div> 
      <Image id="iconCarouselBackgroundMobile" style={{position: "absolute", left: 0, top: 0, zIndex: -2, height: "65vh", width: "100vw"}} src="/tedxbackground.png" width={2000} height={1545} alt="A swirly colorful background."></Image>
      <h3 id="eventSloganMobile">Power of<br></br>Us</h3>
      <center><div id="ctaButtonMobile">
        <a href="https://www.eventbrite.ca/e/tedxcentreville-chicopee-youth-tickets-1109230090059?aff=oddtdtcreator"><button type="button" className="btn btn-danger widerButtonMobile">Get tickets now!</button></a>
        <button type="button" className="btn btn-outline-danger widerButtonMobile" data-bs-toggle="modal" data-bs-target="#emailSubmissionModal">Sign up for mailing list</button>
      </div></center>
      <div id="eventInfoMobile">
      <IconCalendar size={48} color="#eb2008" style={{position: 'absolute', left: "5vw", top: "25%"}}></IconCalendar>
      <h1 className="eventInfoText" style={{position: 'absolute', left: "24vw", top: "26.65%"}}>Sunday, April 27th, 2025</h1>
      <IconClock size={48} color="#eb2008" style={{position: 'absolute', left: "5vw", top: "50%"}}></IconClock>
      <h1 className="eventInfoText" style={{position: 'absolute', left: "24vw", top: "50%"}}>11:00 AM - 5:00 PM EDT. <br></br>Doors at 10:45am</h1>
      </div>
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
        <strong><h1 id="aboutTEDxHeaderMobile">
          What is TEDx?
        </h1></strong>
        <h3 id="aboutTEDxTextMobile">
          In the spirit of ideas worth spreading, TED has created a program called TEDx.
          TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxCentreville Chicopee Youth
          , where x = independently organized TED event.
          At our TEDxCentreville Chicopee Youth event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group.
          The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
        </h3>
      </div></>
    







    :<><div id="successAlert" className="alert alert-success" role="alert">Mailing list signup successful!</div>
    <div id="failedAlert" className="alert alert-danger" role="alert">Mailing list signup failed!</div> 
    <div id="blackBg"></div>
    <Image src="/tedxbackground.png" style={{position: "absolute", left: 0, top: 0, zIndex: -2, height: "75vh", width: "65vw", zIndex: -10}} width={1920} height={1080} alt="A swirly colorful background."></Image>
      <h3 id="eventSlogan">Power of<br></br>Us</h3>
      <center><div id="ctaButton">
        <a href="https://www.eventbrite.ca/e/tedxcentreville-chicopee-youth-tickets-1109230090059?aff=oddtdtcreator"><button type="button" className="btn btn-danger widerButton">Get tickets now!</button></a>
        <button type="button" className="btn btn-outline-danger widerButton" data-bs-toggle="modal" data-bs-target="#emailSubmissionModal">Sign up for mailing list</button>
      </div></center>
      <div id="eventInfo">
      <IconCalendar size={48} color="#eb2008" style={{position: 'absolute', left: "5vw", top: "50%"}}></IconCalendar>
      <h1 className="eventInfoText" style={{position: 'absolute', left: "13vw", top: "54%"}}>Sunday, April 27th, 2025</h1>
      <IconClock size={48} color="#eb2008" style={{position: 'absolute', left: "45vw", top: "50%"}}></IconClock>
      <h1 className="eventInfoText" style={{position: 'absolute', left: "55vw", top: "54%"}}>11:00 AM - 5:00 PM EDT. Doors at 10:45am</h1>
      </div>
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
      </div></>}
    
    </div>
  );
}

export default Homepage;
