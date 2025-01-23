"use client"
import { IconWorldWww, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconBrandX, IconBrandTiktok, IconBrandLinkedin } from "@tabler/icons-react";
export default function Page() {
    return (
        <div className="divRoot">
            <style jsx>{`#speakerImg1 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
#speakerImg2 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
#speakerImg3 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
#speakerImg4 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
#speakerImg5 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
#speakerImg6 {
    background-image: url("https://www.picsum.photos/1920/1080") !important;
}
.card-body {
    font-size: 150%;
    margin-top: -5%;
}
.speakerCard {
    overflow-y: hidden;
    width: 25vw;
    z-index: -5;
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
                                Tanner Bergsma
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                            <a href="https://instagram.com/tannerbergsma" className="socialLinkLeftSide"><IconBrandInstagram></IconBrandInstagram></a>
                            <a href="https://tannerbergsma.org"><IconWorldWww></IconWorldWww></a>
                            <a href="www.linkedIn.com/Tannerbergsma" className="socialLinkRightSide"><IconBrandLinkedin></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker2Card">
                        <div id="speakerImg2" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Mona Abu Maneh
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://www.linkedin.com/in/mona-abu-nameh-31a55319?trk=feed-detail_main-feed-card_feed-actor-image" className="speakerSocialLink linkPos3"><IconBrandLinkedin></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker3Card">
                        <div id="speakerImg3" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Roy Taylor
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://taylorconsultinggroup.org/"><IconWorldWww></IconWorldWww></a>
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
                                Nelson Switzer
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://ca.linkedin.com/in/nelson-a-switzer-88b944b"><IconBrandLinkedin></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker5Card">
                        <div id="speakerImg5" className="img-responsive img-responsive-1x1 card-img-top speakerCardImage"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Maks Turchenko
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://www.linkedin.com/in/maks-turchenko-ba99521a2/"><IconBrandLinkedin></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-lg speakerCard" id="speaker6Card">
                        <div id="speakerImg6" className="img-responsive img-responsive-1x1 card-img-top"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Kaitlyn Hou
                            </div>
                        </div>
                        <div className="card-body">
                            Here lies a blurb about the speaker, maybe where they work, what they've done or any other information that would be cool to know.
                        </div>
                        <div className="d-flex align-self-center">
                        <a href="https://www.instagram.com/kaitlyn.hdsb/" className="socialLinkLeftSide"><IconBrandInstagram></IconBrandInstagram></a>
                        <a href="https://www.linkedin.com/in/kaitlynmhou/" className="socialLinkRightSide"><IconBrandLinkedin></IconBrandLinkedin></a>
                        </div>
                        <div className="socialFooterPadding"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
