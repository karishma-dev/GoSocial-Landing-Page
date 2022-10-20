// Import Statements
import SectionText from "./SectionText";

// Join Component
export default function Join() {
	return (
		// Monetize Background
		<div className='join-bg'>
			{/* <!-- Grid Container --> */}
			<div className='grid-container'>
				{/* <!-- Welcome Container --> */}
				<div className='section-container col-12 grid-col grid-container'>
					{/* Section text Component */}
					<SectionText
						heading='Join GoSocial'
						desc='Learn from the creators who’ve done it all. Join their communities on GoSocial and interact with other members.'
					/>

					{/*  Mobile Phone Illustration */}
					<div className='wrapper col-5'>
						<img
							src='images/black-star.svg'
							alt=''
							className='star black-star'
							loading='lazy'
						/>
						<img
							src='images/yellow-star.svg'
							alt=''
							className='star yellow-star'
							loading='lazy'
						/>
						<div className='card'>
							<img src='images/Mobile.svg' alt='' id='mobile' loading='lazy' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
