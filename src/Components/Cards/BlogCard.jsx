// BlogCard Component
export default function BlogCard({ img }) {
	return (
		<div className='blog-card'>
			<img src={img} alt='' loading='lazy' />
			<div className='blog-text'>
				<div className='blog-info'>
					<span className='blog-date'>oct 20, 2021</span>
					<span className='blog-time'>7 min read</span>
				</div>
				<p className='blog-heading'>What is Somnolence? Why we feel sleepy?</p>
				<div className='blog-author'>
					<span className='author'>Author</span>
					<span className='author-name'>Amanpreet Singh</span>
				</div>
			</div>
		</div>
	);
}
