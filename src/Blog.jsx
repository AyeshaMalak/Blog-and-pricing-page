import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Future of Digital Transformation",
    desc: "How companies are adapting modern technologies to scale faster.",
    content:
      "Digital transformation is reshaping industries worldwide. Businesses are integrating AI, automation, and cloud technologies to stay competitive. Companies that invest in innovation are seeing faster growth and improved efficiency.",
    image:
      "https://images.unsplash.com/photo-1551281044-8b1c0f1a3f6a"
  },
  {
    id: 2,
    title: "Modern Web Development Trends",
    desc: "Key technologies developers should focus on in 2026.",
    content:
      "Modern web development now focuses on performance, scalability, and user experience. Technologies like React, Next.js, and server-side rendering are becoming industry standards.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 3,
    title: "Importance of UI/UX Design",
    desc: "Why user-centered design is critical for digital products.",
    content:
      "Great design improves usability and customer satisfaction. Businesses investing in strong UI/UX design see higher engagement and better conversions.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  }
];

export default function BlogPage() {
  const [activeBlog, setActiveBlog] = useState(null);

  if (activeBlog) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={() => setActiveBlog(null)}
          className="text-blue-600 font-medium mb-6"
        >
          ← Back to Blogs
        </button>

        <img
          src={activeBlog.image}
          className="rounded-xl mb-6 w-full"
          alt=""
        />

        <h1 className="text-3xl font-bold mb-4">{activeBlog.title}</h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          {activeBlog.content}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Insights & Articles</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Discover industry insights, expert tips, and the latest trends in
          technology and digital innovation.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.image}
              className="h-48 w-full object-cover rounded-t-xl"
              alt=""
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

              <p className="text-gray-600 mb-5">{blog.desc}</p>

              <button
                onClick={() => setActiveBlog(blog)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
