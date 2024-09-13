import React, { useEffect } from 'react';

const TeamMember = ({ image, name, title, experience }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover shadow-md mb-4" />
    <h4 className="text-xl font-semibold">{name}</h4>
    <p className="text-green-500 font-medium">{title}</p>
    <p className="text-sm text-gray-600 mt-2">{experience} years experience</p>
  </div>
);

const AboutUs = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/waltertanui/30min', '_blank');
  };

  useEffect(() => {
    // Initialize the Calendly badge widget when the component is mounted
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/waltertanui/30min',
        text: 'Schedule time with me',
        color: '#14ca1f',
        textColor: '#0e0d0d',
        branding: false,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          ABOUT <span className="text-green-500">WALTER AI</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className='space-y-8'>
            <div className='bg-gray-100 p-8 rounded-lg shadow-lg'>
              <h3 className="text-2xl font-semibold mb-4 text-green-500">Our Mission</h3>
              <p className="text-lg text-gray-700 italic">
                "To empower businesses with transformative AI technologies that drive efficiency, insight, and growth."
              </p>
            </div>
            <div className='bg-white border border-gray-200 p-8 rounded-lg shadow-lg'>
              <h3 className="text-2xl font-semibold mb-4 text-black">Who We Are</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Walter Side AI stands at the forefront of artificial intelligence innovation. We are dedicated to breathing life into systems through cutting-edge AI solutions. Our team of passionate experts combines deep technical knowledge with a vision for the future, pushing the boundaries of what's possible in AI.
              </p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg">To catalyze AI-driven transformation across industries, enhancing human capabilities and creating a more intelligent world.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Innovation at the core</li>
                <li>Ethical AI development</li>
                <li>Collaboration and growth</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center text-black">Our Leadership</h3>
              <div className="flex justify-around">
                <TeamMember 
                  image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  name="Walter Tanui"
                  title="Founder and Developer"
                  experience={15}
                />
                <TeamMember 
                  image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  name="Obed Tanui"
                  title="Founder and Chief AI Strategist"
                  experience={12}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button 
            onClick={openCalendly}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
