import HeaderCard from "./HeaderCard";
export default function Header(){
    return(
        // Header
        <header>
    
            {/* Grid Container */}
            <div class="grid-container">
    
                {/* Welcome Container */}
                <div class="section-container col-12 grid-col grid-container">
    
                    {/* Welcome Text */}
                    <div class="section-text col-7">
    
                        <div class="welcome section-head">
                            &#128516;  <span>Welcome to GoSocial</span>
                        </div>
                        <h2 class="main-headings">
                            Find your Favourite Communities On The Internet
                        </h2>
                        <p class="main-desc">
                            Discover communities of your favorite creators and upskill with live workshops, discussions, and challenges.
                        </p>
    
                        <div class="cta">
                            <a href="#"><img src="images/google-store.png" alt="" /></a>
                            <span>Join GoSocial</span>
                        </div>
    
                    </div>
    
                    {/* Welcome Card */}
                    <div class="wrapper col-5">
                        <img src="images/black-star.png" alt="" class="star black-star" />
                        <img src="images/yellow-star.png" alt="" class = "star yellow-star" />
                        <HeaderCard img="images/header-card-img.png"/>
                        <div class="dots">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                    </div>
    
                </div>
    
                {/* Dive Into */}
                <div class="dive-into col-12 grid-container grid-col">  
                    {/* Dive Into Pointer: Join Interesting Communities */}
                    <DiveInto num = "1" img = "images/takeaway-cup-iso-color.png" heading="Join Interesting Communities" desc="Join communities run by top creators and be a part of something great!." />
                    {/* Dive Into Pointer: Attend Workshops and Events */}
                    <DiveInto num = "2" img = "images/video-camera-iso-color.png" heading="Attend Workshops and Events" desc="Stay on top of the latest events and workshops in your communities." />
                    {/* Dive Into Pointer: Participate In Discussions */}
                    <DiveInto num = "3" img = "images/thumb-up-iso-color.png" heading="Participate In Discussions" desc="Share knowledge, learn, and talk to creator through discussion forums." />
                </div>
    
            </div>
    
        </header>
    
    );
}

function DiveInto({num, img, heading, desc}){
    return(
        <div class="dive-pointer col-4">
            <img src= {img} alt="" />
            <h3 class="pointer-heading">
                {`${num}. ${heading}`}
            </h3>
            <p class="pointer-desc">
                {desc}
            </p>
        </div>
    );
}