// Import Statement
import SectionText from "./SectionText";
import ChallengeCard from "./Cards/ChallengeCard";

// Events Component
export default function Events() {
	return (
		// Daily Challenges Background
		<div className='challenges-bg'>
			<div className='grid-container'>
				{/* Welcome Container */}
				<div className='section-container col-12 grid-col grid-container'>
					{/* SectionText Component */}
					<SectionText
						welcome='Workshops, meet-ups, and more'
						heading='Fun Daily Challenges'
						desc='Participate in daily challenges, find interesting topics to work on, and create daily to improve your skills.'
						linkText='See All Challenges'
						location='main'
					/>

					{/* Challenges Card */}
					<div className='wrapper col-5'>
						<img
							src='images/black-star.svg'
							alt=''
							className='star'
							id='ch-black-star'
							loading='lazy'
						/>
						<img
							src='images/yellow-star.svg'
							alt=''
							className='star yellow-star'
							loading='lazy'
						/>
						<ChallengeCard img='images/challenge1.svg' id='challenge1' />
						<ChallengeCard img='images/challenge2.svg' id='challenge2' />
					</div>
				</div>
			</div>
		</div>
	);
}
