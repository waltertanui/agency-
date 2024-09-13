import React from 'react';

const BlogPost = ({ date, title, image }) => (
  <div className="mb-8 border-b border-gray-200 pb-8 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 rounded-lg p-4">
    <div className="flex items-center mb-4">
      <img src={image} alt="Blog post" className="w-24 h-24 mr-6 rounded-lg object-cover shadow-md" />
      <div>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300">{title}</h3>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="text-green-500 hover:text-green-600 transition-colors duration-300 text-2xl font-bold">→</button>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      date: "6th December, 2023",
      title: "Introducing Agentive By Morningside AI",
      image: "/blog2.webp"
    },
    {
      date: "13th November, 2023",
      title: "An Inside Look Into Our Team at Morningside AI",
      image: "/blog1.webp"
    },
    {
      date: "13th November, 2023",
      title: "What OpenAI's Devday Announcements Mean For Your Business.",
      image: "/blog1.webp"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          BLOG <span className="text-green-500">(+) Insights</span>
        </h2>
        <div className="mb-12">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="text-center">
          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
            See all posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;