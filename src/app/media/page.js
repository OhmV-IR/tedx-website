"use client"
import { useEffect, useState } from 'react';
const mobile = require('is-mobile')
export default function Page() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(mobile())
    })
    return (
        <div className="divRoot">
        <style jsx>{`#carousel {
    width: 70vw;
    height: auto;
    position: relative;
    margin-left: 25vw;
    margin-top: 14vh;
}
#carouselHeader {
    position: relative;
    width: 70vw;
    margin-left: 25vw;
    margin-top: 7vh;
    text-align: center;
    scale: 1.5
}
.carouselMobile {
    width: 100vw;
    height: auto;
    position: relative;
    margin-left: 0vw;
    margin-top: 5vh;
}
#carouselHeaderMobile {
    position: relative;
    width: 100vw;
    margin-left: 0vw;
    margin-top: 15vh;
    text-align: center;
    scale: 1.5
}
`}</style>
        {isMobile
        ?<><h1 id="carouselHeaderMobile">Event photos</h1>
            <div id="carouselMobile" className="carousel slide carouselMobile" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                </div>
                <a className="carousel-control-prev" data-bs-target="#carouselMobile" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" data-bs-target="#carouselMobile" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div></>




        :<><h1 id="carouselHeader">Event photos</h1>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                </div>
                <a className="carousel-control-prev" data-bs-target="#carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" data-bs-target="#carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div></>}
        
        </div>
    )
}
