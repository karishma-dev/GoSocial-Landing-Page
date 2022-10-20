// import Statements
import Explore from "./explore";

// Creator Component
export default function Creator() {
	return (
		// Creators
		<div className='creators-bg'>
			<div className='grid-container'>
				{/* Explore Component */}
				<Explore heading='Meet Our Pro Creators' linkText='Become A Creator' />
			</div>
		</div>
	);
}
