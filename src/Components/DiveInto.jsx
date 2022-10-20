// DiveInto Component
export default function DiveInto({ obj }) {
	return (
		// DiveInto
		<div className='dive-into col-12 grid-container grid-col'>
			<DiveCol obj={obj[0]} />
			<DiveCol obj={obj[1]} />
			<DiveCol obj={obj[2]} />
		</div>
	);
}

// DiveCol Component
function DiveCol({ obj }) {
	return (
		<div className='dive-pointer col-4'>
			<img src={obj.img} alt='' loading='lazy' />
			<h3 className='pointer-heading'>{`${obj.num}. ${obj.heading}`}</h3>
			<p className='pointer-desc'>{obj.desc}</p>
		</div>
	);
}
