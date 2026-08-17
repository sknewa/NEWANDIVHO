import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ObjectivesValues from './components/ObjectivesValues';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ObjectivesValues />
      <Contact />
      <Footer />
    </>
  );
}
