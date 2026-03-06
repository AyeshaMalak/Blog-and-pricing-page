// BlogPage.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const posts = [
  {
    title: "Scaling Modern Businesses with Technology",
    date: "Mar 02, 2026",
    excerpt: "Discover strategies companies use to scale efficiently using modern digital tools.",
    content: {
      intro: "Technology has become the backbone of modern businesses...",
      sections: [
        { heading: "1. Automating Repetitive Tasks", text: "Automation tools allow companies to remove manual work..." },
        { heading: "2. Cloud Infrastructure", text: "Cloud platforms enable businesses to scale infrastructure..." },
        { heading: "3. Data Driven Decisions", text: "Modern analytics tools allow companies to track performance metrics..." }
      ]
    }
  },
  {
    title: "Design Systems that Drive Product Growth",
    date: "Feb 22, 2026",
    excerpt: "Learn how structured design systems improve product consistency and growth.",
    content: {
      intro: "Design systems are a powerful way for companies to maintain consistent user experiences...",
      sections: [
        { heading: "1. Consistent User Experience", text: "A unified design language ensures every product feature feels familiar..." },
        { heading: "2. Faster Development", text: "Reusable UI components allow developers to build features faster..." },
        { heading: "3. Better Collaboration", text: "Design systems create a shared language between designers and developers..." }
      ]
    }
  },
  {
    title: "The Future of AI in Corporate Workflows",
    date: "Feb 10, 2026",
    excerpt: "AI is reshaping enterprise workflows. Here's what companies should prepare for.",
    content: {
      intro: "Artificial intelligence is rapidly transforming how companies operate...",
      sections: [
        { heading: "1. AI Assistants for Teams", text: "AI copilots help teams write code, create documents..." },
        { heading: "2. Intelligent Customer Support", text: "AI chatbots and automated support systems reduce response times..." },
        { heading: "3. Predictive Analytics", text: "AI systems can predict business trends, helping companies make proactive decisions..." }
      ]
    }
  }
];

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Latest Blog Articles</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div key={i} whileHover={{ y: -6 }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-5">{post.excerpt}</p>
                <Button variant="outline" onClick={() => setActivePost(post)}>Read More</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {activePost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white max-w-3xl w-full rounded-2xl p-8 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{activePost.title}</h2>
              <button onClick={() => setActivePost(null)}><X /></button>
            </div>

            <p className="text-gray-600 mb-6">{activePost.content.intro}</p>
            {activePost.content.sections.map((sec, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{sec.heading}</h3>
                <p className="text-gray-700">{sec.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


