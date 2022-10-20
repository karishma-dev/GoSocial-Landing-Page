// Import Statements
import Nav from "./Components/Nav.jsx";
import Header from "./Components/Header";
import Explore from "./Components/explore";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Challenges from "./Components/Challenges";
import Creator from "./Components/Creator";
import Monetize from "./Components/Monetize";
import Blog from "./Components/Blog";
import Join from "./Components/Join";
import "../src/combined.css";

// App Component
export default function App() {
	return (
		<div className='App'>
			{/* Navigation bar */}
			<Nav />

			{/* Header */}
			<Header />

			{/* Main */}
			<main>
				<Explore heading='Communities' linkText='Explore Communities' />
				<Events />
				<Explore heading='Events' linkText='See All Events' />
				<Challenges />
				<Explore heading='Challenges' linkText='See All Challenges' />
				<Creator />
				<Monetize />
				<Blog />
				<Join />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
