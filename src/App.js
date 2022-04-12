import Navbar from "./components/navbar";
import Home from "./components/home";
import Video from "./components/video";
import Road from "./components/RoadMap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Video />
      <Road />
    </div>
  );
}

export default App;
