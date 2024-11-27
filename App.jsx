import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/Aboutus';
import About from './components/About';
import Mission from './components/Mission';
import JoinUs from './components/JoinUs';
import Vision from './components/Vision';
import Client from './components/Client';
import OurServices from './components/OurServices';
import Skill from './components/SkillComponent';
import Services from './components/Services';
import Service from './components/ServicesHeader';
import ServiceContent from './components/servicecontent';
import Solution from './components/Solution';
import SolutionContent from './components/SolutionContent';
import SolutionHeader from './components/Solutionheader';
import Contact from './components/Contact'
import ContactContent from './components/Contactcontent'
import AboutContent from './components/Aboutcontent'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Mission />
              <OurServices />
              <JoinUs />
              <Vision />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <AboutContent />
              <Skill />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Services />
              <ServiceContent />
              <Service />
            </>
          }
        />
        <Route
          path="/solution"
          element={
            <>
              <Solution />              
              <SolutionHeader />
              <SolutionContent />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <ContactContent />
            </>
          }
        />
      </Routes>
      <Client />
      <Footer />
    </Router>
  );
}

export default App;
