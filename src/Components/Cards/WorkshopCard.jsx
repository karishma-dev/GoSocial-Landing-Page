// WorkshopCard Component
export default function WorkshopCard({ img }) {
	return (
		<div className='events-card'>
			<img src={img} alt='' className='event-card-img' loading='lazy' />
			<div className='event-card-text'>
				<span className='multiple-session'>Multiple Sessions</span>
				<div className='event-card-head'>
					<p className='event-heading'>NFTS for Artists & Designers</p>
					<p className='event-hoster'>
						Hosted by Melvin Thambi, UI Design Lead
					</p>
				</div>
				<div className='event-date'>
					<img src='images/CalendarBlank.png' alt='Event Date' loading='lazy' />
					<span>Aug 14, 2021 to Sep 14, 2021</span>
				</div>
				<div className='event-rate'>
					<span className='event-original-rate'>Rs. 3,200</span>
					<span className='event-discount-rate'>Rs. 3000</span>
				</div>
			</div>
		</div>
	);
}
