import './App.css';
import './index.css';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Playdate from './playdate';
import grass from "./images/grass.svg"
import cloudpx from "./images/cloudpx.png"
import lamppost from "./images/zyro-image_lamp.png"
import tree from "./images/zyro-image.png"
import About from './About';
import Club from './Club';
import Agenda from './Agenda';
import Speakers from './Speakers';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className='content'>
      <img src={cloudpx} alt="cloud" className="cloud"/>
    <img src={cloudpx} alt="cloud" className="cloud2"/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/spline" element={<Playdate/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/club" element={<Club/>}/>
      <Route exact path="/speakers" element={<Speakers/>}/>
      <Route exact path="/agenda" element={<Agenda/>}/>
      </Routes>
      <img src={lamppost} className="lamppost" alt=""  />
    <img src={tree} className="tree" alt="" />
    <img src={grass} alt="" className="grass" />
    </div>
    </div>
    </Router>
  );
}

export default App;
