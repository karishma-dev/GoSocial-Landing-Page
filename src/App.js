import Nav from "./Components/Nav.js";
import Header from "./Components/Header";
import Explore from './Components/explore';
import Footer from "./Components/Footer";
import Events from './Components/Events';
import Challenges from "./Components/Challenges";
import Creator from './Components/Creator';
import Monetize from './Components/Monetize';
import Blog from './Components/Blog';
import Join from './Components/Join';
import "./style/combined.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <Explore heading="Communities" linkText="Explore Communities" />
        <Events />
        <Explore heading="Events" linkText="See All Events"/>
        <Challenges />
        <Explore heading="Challenges" linkText="See All Challenges"/>
        <Creator />
        <Monetize />
        <Blog />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
