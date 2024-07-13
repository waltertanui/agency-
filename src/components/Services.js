import React from 'react';

const ServiceCard = ({ title, subservices, bgColor, textColor }) => (
  <div className={`p-6 rounded-lg ${bgColor} ${textColor}`}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {subservices.map((service, index) => (
      <div key={index} className="bg-opacity-20 bg-white text-sm p-2 mb-2 rounded">
        {service}
      </div>
    ))}
  </div>
);

const Services = () => {
  const services = [
    {
      title: "AUTONOMOUS AGENT DEVELOPMENT",
      subservices: ["Workflow Automation", "Natural Language to SQL", "Complex Data Pipelines", "Self Adaptive Systems"],
      bgColor: "bg-gray-500",
      textColor: "text-black"
    },
    {
      title: "ENTERPRISE CONSULTING",
      subservices: ["Strategy Development", "Performance Evaluation", "Use Case Identification", "Feasibility Assessments"],
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      title: "CHATBOT DEVELOPMENT",
      subservices: ["GPT Development", "Secure Solutions", "Knowledge Response", "Model Tuning"],
      bgColor: "bg-green-800",
      textColor: "text-white"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          OUR <span className="text-green-500">(+) SERVICES</span>
        </h2>
        <p className="mb-8 text-lg">
          Morningside AI assists you in identifying and integrating cutting-edge AI solutions, guiding you
          seamlessly from inception to deployment and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;