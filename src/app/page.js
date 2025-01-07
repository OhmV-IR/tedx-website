'use client'
function Homepage() {
  return (
    <div id="homepage-root">
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
    `}</style>
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
