import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/medium.jpg";
import img6 from "../assets/medium1.jpg";
import img7 from "../assets/medium3.jpg";
import { Link } from "react-router-dom";

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "The Future of AI",
    content:
      "Artificial Intelligence is reshaping our world in ways we never imagined...",
  },
  {
    id: 2,
    title: "Sustainable Living",
    content:
      "Small changes in our daily lives can lead to a big impact on our planet...",
  },
  {
    id: 3,
    title: "Mindfulness in the Digital Age",
    content:
      "In a world of constant notifications, finding inner peace is more important than ever...",
  },
  {
    id: 4,
    title: "The Art of Productivity",
    content:
      "Maximizing your potential doesn't mean working harder, but working smarter...",
  },
  {
    id: 5,
    title: "Travel on a Budget",
    content:
      "Exploring the world doesn't have to break the bank. Here's how...",
  },
];

// External CSS
const styles = `
  .glassmorphism {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease;
  }
  
  .glassmorphism:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
  }

  .content-fade {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <div className="rounded-2xl p-4">
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-00 to-red-900 text-white rounded-2xl">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center h-screen rounded-xl">
          <motion.div
            className="text-center"
            animate={{ scale: hover ? 1.05 : 1 }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to My Blog
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              Creative stories, insights, and ideas shared with the world.
            </p>

            <Link to="/" className="w-full h-full">
              {" "}
              <button className="bg-white text-purple-700 px-6 py-3 font-semibold rounded-lg transition hover:bg-opacity-90 hover:scale-105">
                Explore Now{" "}
              </button>
            </Link>
          </motion.div>
        </section>

        {/* Dynamic Grid Layout Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className={`glassmorphism p-6 ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-200 ">{blog.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mx-auto max-w-6xl px-4">
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="mb-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-white">
              About the Blog
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Dive into topics like tech, lifestyle, design, and much more.
              Experience stories written with passion and creativity.
            </p>
            <motion.img
              src={img1}
              alt="About the blog"
              className="w-full h-64 object-cover rounded-lg glassmorphism"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Subscribe for Updates
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Stay updated with the latest posts and stories directly to your
              inbox.
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black rounded-l-lg px-4 py-2 focus:outline-none w-full max-w-xs"
              />
              <button className="bg-purple-600 px-6 py-2 rounded-r-lg font-semibold text-white transition hover:bg-purple-700 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
