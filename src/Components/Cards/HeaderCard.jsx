//HeaderCard Component
export default function HeaderCard({ img }) {
	return (
		<div className='card'>
			<img src={img} alt='' className='welcome-card-img' loading='lazy' />
			<div className='card-text'>
				<div className='title-creator'>
					<div className='title'>
						<p className='title-text'>
							Flat & Flatmates New Delhi India, Flat & Flatmates New Delhi India
						</p>
						{/* <span id="title-joined"> 
                            Joined
                        </span>  */}
					</div>
					<div className='creator'>
						<img
							src='images/member5.png'
							alt='Sakshi K Sidhu'
							className='creator-img'
							loading='lazy'
						/>
						<span>By Sakshi K Sidhu</span>
					</div>
				</div>
				<p className='card-desc'>
					Mobile Photography Community is all about good behaviour, personality,
					development, photography, skills, colors. And a lot more.
				</p>
			</div>
			<div className='members'>
				<div className='members-img'>
					<img
						src='images/member1.png'
						alt='Member 1'
						className='img-77'
						loading='lazy'
					/>
					<img
						src='images/member2.png'
						alt='Member 2'
						className='img-78'
						loading='lazy'
					/>
					<img
						src='images/member3.png'
						alt='Member 3'
						className='img-83'
						loading='lazy'
					/>
					<img
						src='images/member4.png'
						alt='Member 4'
						className='img-79'
						loading='lazy'
					/>
					<img
						src='images/member5.png'
						alt='Member 5'
						className='img-80'
						loading='lazy'
					/>
				</div>
				<span>+12,294 Members</span>
			</div>
		</div>
	);
}
