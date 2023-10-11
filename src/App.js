import { useEffect, useState } from 'react';
import "./App.css";
import "./style.css";
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Resume from './components/Resume/ResumeNew'
// import Preloader from './components/Preloader';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  const [ load, setLoad] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
  
    return () =>  clearTimeout(timer);
  }, [])
  
  return (
    <Router>
      {/* <Preloader load={load}> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
      {/* </Preloader> */}
    </Router>
  );
}

export default App;
