import logo from './logo.svg';
import './App.css';
import Nav from "./Nav.js";
import Header from "./Header";
import Explore from './explore';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <Explore />
      </main>
      <Footer />
    </div>
  );
}

export default App;
