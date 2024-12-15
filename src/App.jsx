
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Fotter from './components/fotter/Fotterr';
import About from './pages/About';
import Petcare_deatails from './pages/Petcare_deatails';
import AllProjects from './pages/AllProjects';
import FullTeam from './pages/FullTeam';
import UrbonStudio from './pages/UrbonStudio';
import Jassica from './pages/Jassica';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import HomeHorizons from './pages/HomeHorizons';
import MetroMan from './pages/MetroMan';
import VoyageVista from './pages/VoyageVista';
export default function Widget() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/about" element={<About  />} />
      <Route path="/petcare" element={<Petcare_deatails/>} />
      <Route path="/allprojects" element={<AllProjects/>} />
      <Route path="/team" element={<FullTeam/>} />
      <Route path="/petcare" element={<Petcare_deatails/>} />
      <Route path="/urban" element={<UrbonStudio/>} />
      <Route path="/jessica" element={<Jassica/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/homehorizons" element={<HomeHorizons/>} />
      <Route path="/metroman" element={<MetroMan/>} />
      <Route path="/voyagevista" element={<VoyageVista/>} />
        </Routes>
        <Fotter />
    </Router>
  );
}
