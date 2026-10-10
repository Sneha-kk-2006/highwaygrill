import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuShowcase from './components/MenuShowcase';
import Gallery from './components/Gallery';
import Why from './components/Why';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Header />
        <main>
          <Hero />
          <Story />
          <MenuShowcase />
          <Gallery />
          <Why />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
