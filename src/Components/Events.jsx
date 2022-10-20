// Import Statements
import SectionText from "./SectionText";
import SwiperCard from "./Cards/SwiperCard";

// Events Component
export default function Events() {
	return (
		// Live Events Background
		<div className='live-events-bg'>
			<div className='grid-container'>
				{/* Welcome Container */}
				<div className='section-container col-12 grid-col grid-container'>
					{/* SectionText Component */}
					<SectionText
						welcome='Workshops, meet-ups, and more'
						heading='Live & Interactive Events'
						desc='Find live and interactive workshops in art, photography, fitness, cooking, and 100s of categories.'
						linkText='See All Events'
						location='main'
					/>

					{/* SwiperCard Component*/}
					<SwiperCard location='Events' />
				</div>
			</div>
		</div>
	);
}
