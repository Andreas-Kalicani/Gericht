import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'
import About from './components/about/About'
import './App.css';
import SpecialMenu from './components/specialMenu/SpecialMenu'
import Chef from './components/chef/Chef';
import Video from './components/video/Video';
import Laruel from './components/laurel/Laurel';
import Gallery from './components/gallery/Gallery';
import FindUs from './components/findus/findUs';
import Newsletter from './components/newsletter/Newsletter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Video />
      <Laruel/>
      <Gallery/>
      <FindUs />
      <Newsletter />
    </div>
  );
}

export default App;
