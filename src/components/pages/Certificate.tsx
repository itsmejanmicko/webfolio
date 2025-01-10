import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import cert_ai from '../../utils/assets/image/cert_ai.png';
import cert_py from '../../utils/assets/image/cert_py.png';
import cert_tech from '../../utils/assets/image/cert_tech.png';

const blogPosts = [
  {
    id: 1,
    imgSrc: cert_ai,
    altText: "Artificial Intelligence in tech blog",
    date: "2024-10-09",
    author: "John",
    title: "Building Communication Skills in the Age of AI.",
    description: `A seminar that covers the basics of
     Python programming, including
     data types, control structures,
     functions, and modules, ideal for
     beginners.`
  },
  {
    id: 2,
    imgSrc: cert_py,
    date: "2024-10-17",
    title: "Python Essential Training",
    description: `Focused on enhancing
    communication in a tech-driven
    world, adapting to AI tools, and
    improving human connection.`
  },
  {
    id: 3,
    imgSrc: cert_tech,
    date: "2024-10-09",
    title: "How Quantum Computing Will Revolutionize Data Security",
    description: `A seminar that helps developers
    improve team collaboration, present
    technical ideas clearly, and
    communicate effectively in
    professional settings`
  }
];

const Certificate: React.FC = () => {
  return (
    <div className="w-full bg-bg min-h-screen font-fira">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Certificates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300"></p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-3 lg:max-w-none">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}  // Reset key when post changes
              className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 sm:pt-48 lg:pt-80 group"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              viewport={{ once: false }} 
            >
              {/* Image in the background */}
              <img
                src={post.imgSrc}
                alt={post.altText}
                className="absolute inset-0 h-full w-full object-fit z-0 transition-all  duration-500 group-hover:opacity-100 group-hover:scale-105"  
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 z-10"></div>
              {/* Text content */}
              <div className="relative z-20 opacity-100 transition-all duration-500 group-hover:opacity-0">
                <div className="flex flex-wrap items-center gap-y-1 text-sm text-gray-300">
                  <time dateTime={post.date} className="mr-8">{post.date}</time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">   
                    <span className="absolute inset-0"></span>{post.title}
                </h3>
                <h5 className="text-sm text-[#64ffda]">{post.description}</h5>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
