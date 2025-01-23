"use client"
export default function Page() {
    return (
        <div className="divRoot">
        <style jsx>{`
        #aboutTedXHeader {
    position: relative;
    margin-left: 5vw;
    margin-top: 10vh;
    color: #eb0028;
    font-size: xx-large;
    overflow: hidden;
}
#aboutTedXText {
    position: relative;
    margin-left: 5vw;
    margin-top: 2vh;
    width: 85vw;
}
#aboutTedHeader {
    position: relative;
    margin-left: 5vw;
    margin-top: 5vh;
    color: #eb2008;
    font-size: xx-large;
    overflow: hidden;
}
#aboutTedText {
    position: relative;
    margin-left: 5vw;
    margin-top: 2vh;
    width: 85vw;
}
.linkUnderline {
    text-decoration: underline !important;
    text-decoration-color: #eb2008 !important;
    text-decoration-style: solid !important;
    text-decoration-thickness: 2px !important;
}
        `}</style>
            <strong><h1 id="aboutTedXHeader">About TEDx</h1></strong>
            <h3 id="aboutTedXText">
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
                At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.
                These local, self-organized events are branded TEDx, where x = independently organized TED event.
                The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</h3>
            <strong>
                <h1 id="aboutTedHeader">About TED</h1>
            </strong>
            <h3 id="aboutTedText">
                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change.
                Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others,
                and we invite everyone to engage with ideas and activate them in your community.<br></br><br></br>
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it
                spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.
                In addition to the TED Talks curated from our annual conferences and published on <a className="linkUnderline" href="https://www.ted.com">TED.com</a>, we produce
                <a className="linkUnderline" href="https://audiocollective.ted.com/"> original podcasts</a>,
                <a className="linkUnderline" href="https://www.ted.com/series"> short video series</a>,
                <a className="linkUnderline" href="https://ed.ted.com/"> animated educational lessons
                    (TED-Ed)</a> and TV programs that are translated into more than 100 languages and distributed via partnerships around the world.
                Each year, thousands of independently run <a className="linkUnderline" href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx events</a> bring people together to share ideas and bridge divides in communities on every continent.
                Through the <a className="linkUnderline" href="https://www.audaciousproject.org/">Audacious Project</a>, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just.
                In 2020, TED launched <a className="linkUnderline" href="https://countdown.ted.com/">Countdown</a>, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future,
                and in 2023 TED launched TED <a className="linkUnderline" href="https://www.ted.com/about/programs-initiatives/teddemocracy">Democracy</a> to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future.
                <br></br><a className="linkUnderline" href="https://www.ted.com/about/programs-initiatives">View a full list of TED’s many programs and initiatives.</a><br></br>
                <br></br><br></br>Follow TED on <a className="linkUnderline" href="http://www.facebook.com/TED">Facebook</a>, <a className="linkUnderline" href="https://instagram.com/ted">Instagram</a>, <a className="linkUnderline" href="https://www.linkedin.com/company/ted-conferences">LinkedIn</a>,
                <a className="linkUnderline" href="https://www.tiktok.com/@tedtoks?lang=en"> TikTok</a>, and <a className="linkUnderline" href="http://twitter.com/TEDTalks">X</a>.</h3>
        </div>
    )
}