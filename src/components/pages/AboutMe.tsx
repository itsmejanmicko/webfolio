import { motion } from "framer-motion";
import me from '../../utils/assets/image/me.jpg';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-[#0a192f] text-gray-300 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-semibold mb-8">
          <span className="text-gray-200">About Me</span>
        </h2>

        <div className="grid md:grid-cols-[1fr,400px] gap-8">
          {/* Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} 
          >
            <p className="leading-relaxed">
              My name is Jan-micko (John Mikko). I began my web development journey in grade 11 before the pandemic, inspired by my interest in online games. Initially focused on frontend, I switched to backend development to add dynamic functionality. When I struggled to find classmates willing to learn frontend, I taught myself to improve my full-stack skills.
            </p>

            <p className="leading-relaxed">
              Today, I am fortunate to have the opportunity to continue learning and expanding my skills through freelancing. I work on personal web development projects and assist with capstone projects for other schools.
            </p>

            <p className="leading-relaxed">
              Currently, I am learning AI in web development to enhance my productivity and stay aligned with the latest trends in the developer community.
            </p>

            <p className="mt-8 mb-4">Here are a few technologies I've been working with recently:</p>
            
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> Firebase
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> Express.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> MongoDb
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#64ffda]">▹</span> MySql
              </li>
            </ul>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }} // Ensures it animates when entering and exiting the viewport
          >
            <div className="relative z-10">
              <img
                src={me}
                alt="Portrait photo"
                width={400}
                height={400}
                className="rounded-lg transition-all duration-300 group-hover:mix-blend-normal group-hover:filter-none mix-blend-multiply filter grayscale contrast-100 brightness-90"
              />
              <div className="absolute inset-0 bg-[#64ffda]/30 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="absolute -inset-4 border-2 border-[#64ffda] rounded-lg z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
