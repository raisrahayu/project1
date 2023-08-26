import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Destination from './components/Destination';
function App() {
  return (
    <div>
      <div className="background">
        <NavBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="destination">
        <Destination />
      </div>
    </div>
  );
}

export default App;
