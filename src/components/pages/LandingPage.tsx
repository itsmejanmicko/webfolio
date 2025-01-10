import { Send } from "lucide-react";
import useCopyText from "../../helper/CopyText";
import SuccessAlert from "../../helper/SuccessAlert";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { MagicCard } from "../ui/magic-card";
import AboutSection from "./AboutMe";
import Certificate from "./Certificate";
import Projects from "./Projects";
import Contact from "./Contact";


export default function LandingPage() {
  const { handleCopy, success } = useCopyText();

  return (
    <>
      <div className="min-h-screen w-full text-white p-6 flex flex-col overflow-x-hidden max-w-7xl mx-auto">
        {success && <SuccessAlert />}
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column */}
          <div
            className="absolute inset-0 hidden dark:flex justify-center items-center z-0"
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="w-[300px] h-[300px] rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0.3) 60%, transparent 100%)`,
                filter: "blur(100px)",
                boxShadow: "0 0 100px 50px rgba(59,130,246,0.3)",
              }}
            ></div>
          </div>

          {/* Left Column - Text and Buttons */}
          <motion.div
            className="space-y-6"
            initial={{ x: "-110%" }}
            animate={{ x: 0 }}
            exit={{ x: "-110%" }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="group relative inline-flex items-center px-4 py-1.5 rounded-full bg-primary dark:bg-white/10 text-sm hover:bg-white/50"
            >
              <span
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"
                aria-hidden="true"
              ></span>
              <span className="relative flex items-center space-x-2">
                <Send className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span>Connect with me via email</span>
              </span>
            </button>
            {/* Main Heading */}
            <div className="space-y-4 dark:text-white text-black/80 px-4 mr-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#67E8F9] to-[#A78BFA] bg-clip-text text-transparent">
                  John Mikko Mejia
                </span>
                ,
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Full Stack Web Developer with Expertise in{" "}
                <span className="bg-gradient-to-r from-[#67E8F9] to-[#A78BFA] bg-clip-text text-transparent">
                  M.E.R.N
                </span>{" "}
                stacks.
              </h2>
              <p className="text-gray-400 text-lg mt-4">
                "I’m a full stack developer: I break the front-end, and then fix it on the back-end!"
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 z-10">
              <button className="px-6 py-3 bg-primary dark:bg-[#67E8F9] text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity">
                Work Together?
              </button>
              <Link
                to={import.meta.env.VITE_APP_BLOG}
                className="px-6 py-3 bg-primary/20 dark:bg-white/10 rounded-full text-black dark:text-white font-medium dark:hover:bg-white/20 transition-colors"
              >
                Read Blogs
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Magic Card */}
          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            exit={{ x: "-110%" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <MagicCard className="cursor-pointer flex-col relative bg-[#0D1117] rounded-lg overflow-hidden group w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              {/* Spotlight Effect Layer */}
              <div
                className="absolute inset-0 bg-radial-gradient from-transparent to-[#ffffff40] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none w-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "300px 300px",
                }}
              />
              <div className="bg-[#161B22] p-4 flex items-center gap-2 relative">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <pre className="p-6 text-xs sm:text-sm md:text-base lg:text-lg font-mono relative bg-black/80">
                <code className="dark:text-white">
                  <span className="text-[#F97583]">const</span>{" "}
                  <span className="text-[#E6F1FF]">profile</span>{" "}
                  <span className="text-[#F97583]">=</span>{" "}
                  <span className="text-[#E6F1FF]">{"{"}</span>
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-[#9ECBFF]">&apos;John Mikko&apos;</span>,
                  {"\n"}
                  {"  "}skills: [<br />
                  {"    "}
                  <span className="text-[#9ECBFF]">&apos;React&apos;</span>,{" "}
                  <span className="text-[#9ECBFF]">&apos;NextJS&apos;</span>,{" "}
                  <span className="text-[#9ECBFF]">&apos;Nodejs&apos;</span>,{" "}
                  <span className="text-[#9ECBFF]">&apos;Express&apos;</span>,<br />
                  {"    "}
                  <span className="text-[#9ECBFF]">&apos;Firebase&apos;</span>,{" "}
                  <span className="text-[#9ECBFF]">&apos;MongoDB&apos;</span>,{" "}
                  <span className="text-[#9ECBFF]">&apos;Git&apos;</span>
                  {"\n"}
                  {"  "}],
                  {"\n"}
                  {"  "}student: <span className="text-[#F97583]">true</span>,
                  {"\n"}
                  {"  "}learner: <span className="text-[#F97583]">true</span>,
                  {"\n"}
                  {"  "}curious: <span className="text-[#F97583]">true</span>,
                  {"\n"}
                  {"  "}hireable:{" "}
                  <span className="text-[#F97583]">function</span>() {"{"}
                  {"\n"}
                  {"    "}
                  <span className="text-[#F97583]">return</span> (
                  {"\n"}
                  {"      "}this.student && this.learner && this.skills.length{" "}
                  {">="} 5
                  {"\n"}
                  {"    "});
                  {"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </MagicCard>
          </motion.div>
        </div>
      </div>
      <AboutSection />
      <Certificate />
      <Projects />
      <Contact />
    </>
  );
}
