// Import Statements
import HeaderCard from "./Cards/HeaderCard";
import WorkshopCard from "./Cards/WorkshopCard";
import ChallengeCard from "./Cards/ChallengeCard";
import SectionText from "./SectionText";
import CreatorCard from "./Cards/CreatorCard";
import BlogCard from "./Cards/BlogCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

// Arrays
const CommunityArray = ["images/Community1.png", "images/Community2.png", "images/Community3.png", "images/Community1.png", "images/Community2.png", "images/Community3.png"];
const WorkshopArray = ["./images/event1.png", "./images/event2.png", "./images/event3.png", "images/event1.png", "images/event2.png", "images/event3.png"];
const ChallengeArray = ["images/challenge3.png","images/challenge4.png", "images/challenge5.png", 
                        "images/challenge6.png","images/challenge7.png", "images/challenge8.png"];
const CreatorArray = ["images/creator1.png", "images/creator2.png", "images/creator3.png", "images/creator4.png", "images/creator1.png", "images/creator2.png", "images/creator3.png", "images/creator4.png"];
const blogArray = ["images/blog1.png", "images/blog2.png", "images/blog3.png", "images/blog1.png", "images/blog2.png", "images/blog3.png"];

export default function Explore({heading, linkText}){

    // Method to know which Card we have to show
    const head = () => {
        let card;
        switch (heading){
            case "Communities":
                card = Array.from(CommunityArray, (el) => <HeaderCard img={el}/>);
                return card;
            case "Events":
                card = Array.from(WorkshopArray, (el) => <WorkshopCard img={el} />);
                return card;
            case "Challenges":
                card = Array.from(ChallengeArray, (el) => <ChallengeCard img = {el} />);
                break;
            case "Meet Our Pro Creators":
                card = Array.from(CreatorArray, (el) => <CreatorCard img = {el} />)
                break;
            case "GoSocial Blogs":
                card = Array.from(blogArray, (el) => <BlogCard img={el} />)
                break;
            default:
                return "Error...";
        }
        return card;
    }

    // Component to know the Heading Text
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
                            <img src="images/CaretLeft.png" alt="" className="swiper-button-next" /> 
                            <img src="images/CaretRight.png" alt="" className="swiper-button-prev" />
                        </div>
                   </div>;
        }
        return text;
    }

    // Method to know the number of slides Pre View
    const slidee = () => {
        if(heading === "Meet Our Pro Creators"){
            return 4;
        }else if(heading === "Challenges"){
            return 6;
        }else{
            return 3;
        }
    }

    return (
        // Explore 
        <section className={heading === "Challenges"? "explore-communities explore-challenges grid-col col-12 grid-container": "explore-communities col-12 grid-col grid-container"}>

            {/* Explore Heading */}
            <HeadingText />

            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                direction={"horizontal"}
                spaceBetween={300}
                slidesPerView={2}
                breakpoints={{
                    440: {
                        spaceBetween: 210
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 80
                    },
                    708: {
                        slidesPerView:2,
                        spaceBetween: 100
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                    1200: {
                        slidesPerView: slidee(),
                        spaceBetween: 20
                    }
                }}
                grabCursor={true}
                mousewheel={true}
                keyboard={true}
                navigation={{
                    prevEl: ".swiper-button-next",
                    nextEl: ".swiper-button-prev"
                }}
                className="grid-col swiper outer-slider col-12">

                {/* Slides that are to be shown in the swiper */}
                {head().map((slideContent, i) => (
                    <SwiperSlide key={i}>
                        {slideContent}
                    </SwiperSlide>
                ))}

            </Swiper>

            <a href="#" className="section-link col-12 grid-col">{linkText}</a>

        </section>

    );
}