// Import Statement
import SectionText from "./SectionText";
import ChallengeCard from "./Cards/ChallengeCard";

// Events Component
export default function Events(){

    return (

        // Daily Challenges Background
        <div className="challenges-bg">

            <div className="grid-container">

                {/* Welcome Container */}
                <div className="section-container col-12 grid-col grid-container">

                    {/* SectionText Component */}
                    <SectionText 
                        welcome="Workshops, meet-ups, and more"
                        heading="Fun Daily Challenges"
                        desc="Participate in daily challenges, find interesting topics to work on, and create daily to improve your skills."
                        linkText="See All Challenges" 
                        location="main" />

                    {/* Challenges Card */}
                    <div className="wrapper col-5">
                        <img src="images/black-star.png" alt="" className="star black-star" />
                        <img src="images/yellow-star.png" alt="" className = "star yellow-star" />
                        <ChallengeCard img="images/Challenge1.png" id="challenge1"/>
                        <ChallengeCard img="images/Challenge2.png" id="challenge2"/>
                    </div>

                </div>

            </div>
            
        </div>
        
    )
}