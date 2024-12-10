import './Media.css'
function Media() {
    return (
        <div id="mediaRoot">
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="https://www.picsum.photos/1920/1080" />
                    </div>
                </div>
                <a class="carousel-control-prev" data-bs-target="#carousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" data-bs-target="#carousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
            <div id="carousel-team-headshots" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="6"></button>
                    <button type="button" data-bs-target="#carousel-team-headshots" data-bs-slide-to="7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" alt="" src="/headshotDiya.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotUrvi.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotAdrien.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotStefan.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotAfeef.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotAlina.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotKunsh.png" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" alt="" src="/headshotJoydrutt.png" />
                    </div>
                </div>
                <a class="carousel-control-prev" data-bs-target="#carousel-team-headshots" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" data-bs-target="#carousel-team-headshots" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Media;