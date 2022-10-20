// Import Statements
import SectionText from "./SectionText";
import DiveInto from "./DiveInto";
import SwiperCard from "./Cards/SwiperCard";

// Header DiveInto Object
const diveObj = [
	{
		num: 1,
		img: "images/takeaway-cup-iso-color.png",
		heading: "Join Interesting Communities",
		desc: "Join communities run by top creators and be a part of something great!.",
	},
	{
		num: 2,
		img: "images/video-camera-iso-color.png",
		heading: "Attend Workshops and Events",
		desc: "Stay on top of the latest events and workshops in your communities.",
	},
	{
		num: 3,
		img: "images/thumb-up-iso-color.png",
		heading: "Participate In Discussions",
		desc: "Share knowledge, learn, and talk to creator through discussion forums.",
	},
];

// Header Component
export default function Header() {
	return (
		// Header
		<header>
			{/* Grid Container */}
			<div className='grid-container'>
				{/* Welcome Container */}
				<div className='section-container col-12 grid-col grid-container'>
					{/* Welcome Text */}
					<SectionText
						welcome='Welcome to GoSocial'
						heading='Find your Favourite Communities On The Internet'
						desc='Discover communities of your favourite creators and upskill with live workshops, discussions, and challenges.'
						location='header'
					/>

					{/* SwiperCard Component */}
					<SwiperCard location='Communities' />
				</div>

				{/* DiveInto Component */}
				<DiveInto obj={diveObj} />
			</div>
		</header>
	);
}
