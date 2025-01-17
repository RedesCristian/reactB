import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <About />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
