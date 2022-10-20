// Import Statements
import HeaderCard from "./Cards/HeaderCard";
import WorkshopCard from "./Cards/WorkshopCard";
import ChallengeCard from "./Cards/ChallengeCard";
import SectionText from "./SectionText";
import CreatorCard from "./Cards/CreatorCard";
import BlogCard from "./Cards/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Arrays
const CommunityArray = [
	"images/community1.svg",
	"images/community2.svg",
	"images/community3.svg",
	"images/community1.svg",
	"images/community2.svg",
	"images/community3.svg",
];
const WorkshopArray = [
	"images/event1.svg",
	"images/event2.svg",
	"images/event3.svg",
	"images/event1.svg",
	"images/event2.svg",
	"images/event3.svg",
];
const ChallengeArray = [
	"images/challenge3.svg",
	"images/challenge4.svg",
	"images/challenge5.svg",
	"images/challenge6.svg",
	"images/challenge7.svg",
	"images/challenge8.svg",
];
const CreatorArray = [
	"images/creator1.svg",
	"images/creator2.svg",
	"images/creator3.svg",
	"images/creator4.svg",
	"images/creator1.svg",
	"images/creator2.svg",
	"images/creator3.svg",
	"images/creator4.svg",
];
const blogArray = [
	"images/blog1.svg",
	"images/blog2.svg",
	"images/blog3.svg",
	"images/blog1.svg",
	"images/blog2.svg",
	"images/blog3.svg",
];

export default function Explore({ heading, linkText }) {
	// Method to know which Card we have to show
	const head = () => {
		let card;
		switch (heading) {
			case "Communities":
				card = Array.from(CommunityArray, (el) => <HeaderCard img={el} />);
				return card;
			case "Events":
				card = Array.from(WorkshopArray, (el) => <WorkshopCard img={el} />);
				return card;
			case "Challenges":
				card = Array.from(ChallengeArray, (el) => <ChallengeCard img={el} />);
				break;
			case "Meet Our Pro Creators":
				card = Array.from(CreatorArray, (el) => <CreatorCard img={el} />);
				break;
			case "GoSocial Blogs":
				card = Array.from(blogArray, (el) => <BlogCard img={el} />);
				break;
			default:
				return "Error...";
		}
		return card;
	};

	// Component to know the Heading Text
	function HeadingText() {
		let text;
		let h = heading === "GoSocial Blogs" ? heading : `Exlpore ${heading}`;
		let c = heading === "Challenges" ? true : false;
		if (heading === "Meet Our Pro Creators") {
			text = (
				<SectionText
					heading='Meet Our Pro Creators'
					desc='Learn from the creators who’ve done it all. Join their communities on GoSocial and interact with other members.'
					location='Creator'
				/>
			);
		} else {
			text = (
				<div className='explore-head col-12 grid-col'>
					<h2>{h}</h2>
					{c ? (
						""
					) : (
						<div className='arrow'>
							<img
								src='images/CaretLeft.png'
								alt=''
								className='swiper-button-next'
								loading='lazy'
							/>
							<img
								src='images/CaretRight.png'
								alt=''
								className='swiper-button-prev'
								loading='lazy'
							/>
						</div>
					)}
				</div>
			);
		}
		return text;
	}

	// Method to know the number of slides Pre View
	const slidee = () => {
		if (heading === "Meet Our Pro Creators") {
			return 4;
		} else if (heading === "Challenges") {
			return 6;
		} else {
			return 3;
		}
	};

	return (
		// Explore
		<section
			className={
				heading === "Challenges"
					? "explore-communities explore-challenges grid-col col-12 grid-container"
					: "explore-communities col-12 grid-col grid-container"
			}
		>
			{/* Explore Heading */}
			<HeadingText />

			{/* Swiper */}
			<Swiper
				modules={[Navigation]}
				direction={"horizontal"}
				spaceBetween={0}
				slidesPerView={1}
				breakpoints={{
					440: {
						spaceBetween: 210,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 80,
					},
					708: {
						slidesPerView: 2,
						spaceBetween: 100,
					},
					900: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1200: {
						slidesPerView: slidee(),
						spaceBetween: 20,
					},
				}}
				grabCursor={true}
				mousewheel={true}
				keyboard={true}
				navigation={{
					prevEl: ".swiper-button-next",
					nextEl: ".swiper-button-prev",
				}}
				className='grid-col swiper outer-slider col-12'
			>
				{/* Slides that are to be shown in the swiper */}
				{head().map((slideContent, i) => (
					<SwiperSlide key={i}>{slideContent}</SwiperSlide>
				))}
			</Swiper>

			<a href='#' className='section-link col-12 grid-col'>
				{linkText}
			</a>
		</section>
	);
}
