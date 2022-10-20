// CreatorCard Component
export default function CreatorCard({ img }) {
	return (
		<div className='creator-card'>
			<img src={img} alt='Drishti Verma' loading='lazy' />
			<div className='creator-card-text'>
				<p className='creator-name'>Drishti Verma</p>
				<p className='creator-desc'>
					This is a creator line. This is a creator line. This is a creator
					line. This is a creator line.
				</p>
			</div>
		</div>
	);
}
