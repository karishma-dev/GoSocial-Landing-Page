// Footer Component
export default function Footer() {
	return (
		// Footer
		<footer>
			{/* Privacy  Note */}
			<div className='privacy-note col-12 grid-col'>
				<h3>Privacy Note</h3>

				{/* Privacy Description */}
				<p id='privacy-desc'>
					By using www.gosocial.io(our website), you are fully accepting the
					Privacy Policy available at
					<a href='#'> https://gosocial.io/privacy</a> governing your access to
					GoSocial and provision of services by GoSocial to you. If you do not
					accept terms mentioned in the
					<a href='#'> Privacy Policy</a>, you must not share any of your
					personal information and immediately exit Gosocial.
				</p>
			</div>

			{/* <!-- CTA: Are you a creator --> */}
			<div className='footer-creator col-12 grid-col'>
				<div className='footer-creator-col'>
					<p id='fcreator-heading'>Are you a creator?</p>
					<p id='fcreator-desc'>
						If you want to build your community, host events, or conduct
						workshops on GoSocial, get in touch!
					</p>
				</div>

				<a href='#' id='fcreator-link'>
					Get In Touch
				</a>
			</div>

			{/* Footer Links */}
			<div className='footer-links col-12 grid-col'>
				<div className='footer-link-col'>
					<a href='#'>
						<img src='images/Logo.svg' alt='GoSocial Logo' />
					</a>
					<div className='cta'>
						<a href='#'>
							<img src='images/google-store.svg' alt='Google Store' />
						</a>
						<a href='#'>
							<img src='images/apple-store.svg' alt='Apple Store' />
						</a>
					</div>
				</div>
				<div className='footer-link-col' id='creator-studio'>
					<a href='#'>Creator Studio</a>
					<a href='#'>About</a>
					<a href='#'>Blog</a>
				</div>
				<div className='footer-link-col' id='help'>
					<a href='#'>Help</a>
					<a href='#'>Terms of Use</a>
					<a href='#'>Privacy Policy</a>
				</div>
				<div className='footer-link-col'>
					<a href='#'>Facebook</a>
					<a href='#'>Instagram</a>
					<a href='#'>Twitter</a>
				</div>
			</div>

			{/* Copyright */}
			<div className='copyright col-12 grid-col'>
				<p id='copyright-heading'>
					Copyright 2021 © Hapramp Studios Pvt. Ltd. All Rights Reserved.
				</p>
				<p id='copyright-desc'>
					The content and images used on this site are copyright protected and
					copyrights vests with the respective owners. The usage of the content
					and images on this website is intended to promote the works and no
					endorsement of the artist shall be implied. Unauthorized use is
					prohibited and punishable by law.
				</p>
			</div>
		</footer>
	);
}
