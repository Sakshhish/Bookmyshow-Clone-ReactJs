// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";

// React Slick CSS
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing the pages
import Homepage from "./pages/HomePage";
import Moviepage from "./pages/MoviePage";
import Playpage from "./pages/PlayPage";


function App() {
  return <Routes>
    <Route path="/" element = {<Homepage/>} />
    <Route path="/movie/:id" element = {<Moviepage/>} />
    <Route path="/plays" element/>     
  </Routes>
  // return (
  //   <div className="App">
  //     Hello World
  //   </div>
  // );
}

export default App;
