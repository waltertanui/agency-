import React from 'react';

const BlogPost = ({ date, title, image }) => (
  <div className="mb-8 border-b border-gray-200 pb-8">
    <div className="flex items-center mb-4">
      <img src={image} alt="Blog post" className="w-16 h-16 mr-4 rounded" />
      <div>
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="text-green-500">→</button>
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
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          BLOG <span className="text-green-500">(+) Blog</span>
        </h2>
        <div className="mb-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;