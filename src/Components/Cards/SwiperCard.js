// import Swiper core and required modules
import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HeaderCard from './HeaderCard';
import WorkshopCard from './WorkshopCard';
import { Pagination, Autoplay } from "swiper";

export default function SwiperCard({location}){
    function Head(){
        let card;
        switch (location){
            case "Communities":
                card = <HeaderCard img="images/Community1.png" />
                break;
            case "Events":
                card = <WorkshopCard />
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
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{delay:2500}}
            pagination={{ clickable: true }}
            grabCursor={true}
            className="swiper"
        >
            <SwiperSlide>
                <Head /> 
            </SwiperSlide>
            <SwiperSlide>
                <Head /> 
            </SwiperSlide>
            <SwiperSlide>
                <Head /> 
            </SwiperSlide>
        </Swiper>
    </div>
  );
};