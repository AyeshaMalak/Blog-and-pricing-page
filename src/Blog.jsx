import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    desc: "Learn the fundamentals of building a powerful digital marketing strategy for modern businesses.",
    content:
      "Full blog content here. You can write detailed content about marketing strategies, SEO techniques, content planning and more.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 2,
    title: "Web Development Trends 2026",
    desc: "Explore the latest technologies shaping the future of web development.",
    content:
      "Full blog content explaining AI integration, server components, edge computing, and modern frameworks.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    desc: "How good design improves customer experience and business success.",
    content:
      "Detailed explanation about usability, accessibility, modern design systems and user psychology.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  }
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6">
        <button
          onClick={() => setSelectedBlog(null)}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back
        </button>

        <img
          src={selectedBlog.image}
          alt=""
          className="rounded-xl mb-6 w-full"
        />

        <h1 className="text-3xl font-bold mb-4">{selectedBlog.title}</h1>

        <p className="text-gray-700 leading-relaxed">
          {selectedBlog.content}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-300">
          Insights, tips and knowledge from our experts
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img src={blog.image} alt="" className="h-48 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

              <p className="text-gray-600 mb-4">{blog.desc}</p>

              <button
                onClick={() => setSelectedBlog(blog)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
      }
