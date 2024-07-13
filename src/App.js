import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Blog />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
