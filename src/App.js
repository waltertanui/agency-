import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App bg-black text-white">
      <Header />
      <Hero />
      <AboutUs/>
      <Services />
      <Blog />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
