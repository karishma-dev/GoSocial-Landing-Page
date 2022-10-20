export default function SectionText({
	welcome,
	heading,
	desc,
	linkText,
	location,
}) {
	return (
		// <!-- Welcome Text -->
		<div
			className={
				location === "Creator"
					? "section-text col-10 grid-col"
					: "section-text col-7"
			}
		>
			<WelcomeText location={location} welcome={welcome} />
			<h2 className='main-headings'>{heading}</h2>
			<p className='main-desc'>{desc}</p>

			{location === "main" ? (
				<a href='#' className='section-link'>
					{linkText}
				</a>
			) : (
				<Cta location={location} />
			)}
		</div>
	);
}

function Cta({ location }) {
	let secondCta;
	if (location === "header") {
		secondCta = (
			<a href='#' id='join-link'>
				Join GoSocial &#8594;
			</a>
		);
	} else if (location === "Creator") {
		return "";
	} else {
		secondCta = (
			<a href='#'>
				<img src='images/apple-store.svg' alt='Apple Store' loading='lazy' />
			</a>
		);
	}
	return (
		<div className='cta'>
			<a href='#'>
				<img src='images/google-store.svg' alt='Google Store' loading='lazy' />
			</a>
			{secondCta}
		</div>
	);
}
function WelcomeText({ location, welcome }) {
	if (location === "header" || location === "main") {
		return (
			<div className='section-head'>
				&#128516; <span>{welcome}</span>
			</div>
		);
	} else {
		return null;
	}
}
