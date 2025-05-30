"use client"
import { IconWorldWww, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconBrandX, IconBrandTiktok, IconBrandLinkedin } from "@tabler/icons-react";
export default function Page() {

    function GetIconSize(){
        return 32;
    }

    return (
        <div className="divRoot">
            <style jsx>{`
#speakerImg1 {
    background-image: url("/NelsonPortrait.jpg") !important;
}
#speakerImg2 {
    background-image: url("/PatriciaPortrait.png") !important;
}
#speakerImg3 {
    background-image: url("/YasirPortrait.png") !important;
}
#speakerImg4 {
    background-image: url("/MitchPortrait.png") !important;
}
#speakerImg5 {
    background-image: url("/KaitlynPortrait.jpg") !important;
}
#speakerImg6 {
    background-image: url("/JyotiPortrait.jpg") !important;
}
.card-body {
    font-size: 150%;
    margin-top: -5%;
}
.speakerCard {
    overflow-y: hidden;
    width: 25vw;
    position: relative;
    margin-left: 4vw;
    margin-top: 10vh;
}
.socialFooterPadding {
    position: relative;
    margin-bottom: 4vh;
    width: 100%;
}
.socialLinkLeftSide {
    margin-right: 3vw;
}
.socialLinkRightSide {
    margin-left: 3vw;
}
`}
            </style>
            <div className="row row-deck">
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker1Card">
                        <div id="speakerImg1" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Nelson Switzer
                            </div>
                        </div>
                        <div className="card-body">
                        Nelson A. Switzer is a Gigacorn Hunter and climate innovation leader driving billion-tonne carbon reduction solutions with deep expertise in sustainability, ESG, and finance.
                        </div>
                        <div className="d-flex align-self-center">
                            <a href="https://ca.linkedin.com/in/nelson-a-switzer-88b944b"><IconBrandLinkedin size={GetIconSize()}></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker2Card">
                        <div id="speakerImg2" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Patrica Abdallah
                            </div>
                        </div>
                        <div className="card-body">
                            Patricia Abdallah is the founder of The Homeowner Link, a platform that connects real estate professionals with service providers to streamline real estate transactions.
                        </div>
                        <div className="d-flex align-self-center">
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker3Card">
                        <div id="speakerImg3" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Yasir Khan
                            </div>
                        </div>
                        <div className="card-body">
                            Yasir Khan is the founder of SpeakLikeACEO.com, a keynote speaker, and expert in coaching CEOs and leaders to present with confidence and impact.
                        </div>
                        <div className="d-flex align-self-center">
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
            </div>
            <div className="row row-deck">
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker4Card">
                        <div id="speakerImg4" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Mitch Abrams
                            </div>
                        </div>
                        <div className="card-body">
                            Dr. Mitch Abrams is the Founder and CEO of NexGenHealth Ltd., focused on reversing the mental health epidemic through art, technology, and compassionate healthcare practices.
                        </div>
                        <div className="d-flex align-self-center">
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker5Card">
                        <div id="speakerImg5" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Kaitlyn Hou
                            </div>
                        </div>
                        <div className="card-body">
                            Kaitlyn Hou is a student leader, entrepreneur, and advocate, known for her roles as Student Trustee, CEO of OrangeforChange, and her advocacy for mental health, Indigenous rights, and youth empowerment.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://www.instagram.com/kaitlyn.hdsb/" className="socialLinkLeftSide"><IconBrandInstagram size={GetIconSize()}></IconBrandInstagram></a>
                        <a href="https://www.linkedin.com/in/kaitlynmhou/" className="socialLinkRightSide"><IconBrandLinkedin size={GetIconSize()}></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker6Card">
                        <div id="speakerImg6" className="img-responsive img-responsive-1x1 card-img-top"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Jyoti Balhara
                            </div>
                        </div>
                        <div className="card-body">
                            An experienced pharma executive, researcher, and storyteller with expertise in medical marketing, academia, and leadership, known for innovation and community engagement.
                        </div>
                        <div className="d-flex align-self-center">
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
