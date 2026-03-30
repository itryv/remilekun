import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <Contact />
      <footer className="footer">
        <div className="container">
          © {currentYear} Remilekun. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
