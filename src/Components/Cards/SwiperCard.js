// import Swiper core and required modules and styles
import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

// Import HeaderCard and WorkshopCard Component
import HeaderCard from './HeaderCard';
import WorkshopCard from './WorkshopCard';


export default function SwiperCard({location}){

    // Function to decide which Card we have to show
    const head = () => {
        let card;
        switch (location){
            case "Communities":
                card = Array.from({length: 3}, (i) => <HeaderCard img="images/Community1.png" />);
                break;
            case "Events":
                card = Array.from({length: 3}, (i) => <WorkshopCard img="images/event1.png" />);
                break;
            default:
                return "Error...";
        }
        return card;
    }
    
    return (

        <div className="wrapper col-5">
            <img src="images/black-star.png" alt="" className="star black-star" />
            <img src="images/yellow-star.png" alt="" className = "star yellow-star" />

            {/* Swiper */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{delay:2500}}
                pagination={{ clickable: true }}
                grabCursor={true}
                className="swiper"
            >

                {/* SwiperSlides */}
                {head().map((slideContent, i) => (
                    <SwiperSlide key={i}>
                        {slideContent}
                    </SwiperSlide>
                ))}
                
            </Swiper>

        </div>
        
    );
};