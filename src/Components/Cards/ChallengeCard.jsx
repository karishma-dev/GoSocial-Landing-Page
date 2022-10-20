// ChallengeCard Component
export default function ChallengeCard({ img, id }) {
	return (
		<div className='challenge-card' id={id}>
			<img src={img} alt='' className='challenge-card-img' loading='lazy' />
			<div className='challenge-card-text'>
				<span className='challenge-card-heading'>
					Daily Doodle - Art Challenge
				</span>
				<div className='challenge-card-footer'>
					<div className='challenge-card-users challenge-flex'>
						<img src='images/Users.png' alt='User Number' loading='lazy' />
						<span>12,294</span>
					</div>
					<div className='challenge-card-posts challenge-flex'>
						<img
							src='images/challenge-card-rating.png'
							alt='Challenge Rating'
							loading='lazy'
						/>
						<span>12,294</span>
					</div>
					<div className='challenge-card-creator challenge-flex'>
						<img
							src='images/challenge-creator.png'
							alt='Challenge Creator'
							loading='lazy'
						/>
						<span>By GoSocial App</span>
					</div>
				</div>
			</div>
		</div>
	);
}
