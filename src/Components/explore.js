import HeaderCard from "./Cards/HeaderCard";
import WorkshopCard from "./Cards/WorkshopCard";
import ChallengeCard from "./Cards/ChallengeCard";
import SectionText from "./SectionText";
import CreatorCard from "./Cards/CreatorCard";
import BlogCard from "./Cards/BlogCard";

export default function Explore({heading, linkText}){
    
    const CommunityArray = ["images/Community1.png", "images/Community2.png", "images/Community3.png"];
    const ChallengeArray = ["images/challenge3.png","images/challenge4.png", "images/challenge5.png", "images/challenge6.png",
                            "images/challenge7.png", "images/challenge8.png"];
    const CreatorArray = ["images/creator1.png", "images/creator2.png", "images/creator3.png", "images/creator4.png"];
    const blogArray = ["images/blog1.png", "images/blog2.png", "images/blog3.png"];

    function Head(){
        let card;
        switch (heading){
            case "Communities":
                card = CommunityArray.map((item,index) => {
                    return (
                        <HeaderCard img={item}/>
                    )
                })
                return card;
            case "Events":
                card = CommunityArray.map((item,index) => {
                    return (
                        <WorkshopCard />
                    )
                })
                return card;
            case "Challenges":
                card = ChallengeArray.map((item, index) => {
                    return (
                        <ChallengeCard img = {item} />
                    )
                })
                break;
            case "Meet Our Pro Creators":
                card = CreatorArray.map((item, index) => {
                    return (
                        <CreatorCard img = {item} />
                    )
                })
                break;
            case "GoSocial Blogs":
                card = blogArray.map((item) => {
                    return (
                        <BlogCard img={item} />
                    )
                });
                break;
            default:
                return "Error...";
        }

        return card;
    }

    function HeadingText (){
        let text;
        let h = heading === "GoSocial Blogs" ? heading : `Exlpore ${heading}`;
    
        if(heading === "Meet Our Pro Creators"){
            text = <SectionText heading="Meet Our Pro Creators"
            desc = "Learn from the creators who’ve done it all. Join their communities on GoSocial and interact with other members."
            location = "Creator" />;
        }else{
            text = <div className="explore-head col-12 grid-col">
                        <h2>
                            {h}
                        </h2>
                        <div className="arrow">
                            <img src="images/CaretLeft.png" alt="" />
                            <img src="images/CaretRight.png" alt="" />
                        </div>
                   </div>;
        }
        return text;
    }
    return (
        // Explore Communities
        <section className={heading === "Challenges"? "explore-communities explore-challenges grid-col col-12 grid-container": "explore-communities col-12 grid-container"}>

            {/* Explore Communities Heading --> */}
            <HeadingText />

            {/* <!-- Explore Communities Card --> */}
            <div className="outer-slider col-12 grid-col">
                <div className="inner-slider">
                    {heading === "Challenges" ? <Head /> : <><Head /> <Head /></> }
                </div>
            </div>

            <a href="#" className="section-link col-12 grid-col">{linkText}</a>

        </section>

    );
}