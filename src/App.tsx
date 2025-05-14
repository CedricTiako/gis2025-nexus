import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Resources from './components/Resources';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Registration />
        <Resources />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;