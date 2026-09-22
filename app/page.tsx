"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Mail, Check, ArrowUpRight, ChevronDown, GraduationCap, Calendar, MapPin } from "lucide-react";

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Circular Profile Avatar 2 Emblem */}
      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-neutral-700/80 bg-neutral-900 shadow-sm transition-transform duration-200 hover:scale-105">
        <Image
          src="/avatar2.jpg"
          alt="Nhat Minh Tran Logo"
          fill
          sizes="24px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-start gap-2 mb-2">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-baseline">
        {title}
        <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00d2ff] ml-1.5 rounded-[2px]" />
      </h2>
      <div className="w-14 h-1 bg-[#00d2ff] rounded-full" />
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "nminhtran1207@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Google Cloud Platform",
    "Git",
    "MongoDB",
  ];

  const projects = [
    {
      title: "Video Processing Engine (Youtube Clone)",
      subtitle: "Cloud-native transcoding microservice",
      description: "Distributed pipeline utilizing FFmpeg workers and asynchronous pub/sub messaging to handle real-time video encoding at scale.",
      image: "/project-1.png",
      tags: ["TypeScript", "Docker", "GCP", "Next.js", "Firebase"],
      github: "https://github.com/MinhTran1212/youtube-clone",
    },
    {
      title: "Personal Nutrition Management System",
      subtitle: "High-performance relational REST service",
      description: "Health tracking backend engineered with strict schema migrations, JWT authorization, and automated integration suites.",
      image: "/project-2.png",
      tags: ["TypeScript", "PostgreSQL", "Prisma", "Docker", "Vitest/Supertest"],
      github: "https://github.com/MinhTran1212/Calories-Tracker",
    },
    {
      title: "Personalized Academic Productivity Management Platform",
      subtitle: "Academic progress & productivity dashboard",
      description: "A focused workflow system for logging study sessions, tracking mastery across core topics, and visualizing weekly learning velocity.",
      image: "/project-3.png",
      tags: ["Express", "TypeScript", "PostgreSQL", "Node.js"],
      github: "https://github.com/MinhTran1212/StudyTracker",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070709] text-neutral-200 selection:bg-neutral-800 antialiased overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/10 via-pink-500/5 to-transparent blur-[160px] rounded-full" />
      </div>

      {/* Floating Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
      >
        <nav className="flex items-center gap-5 sm:gap-7 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-neutral-800/80 bg-neutral-950/75 backdrop-blur-xl text-xs sm:text-sm text-neutral-400 shadow-2xl shadow-black/60">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center hover:opacity-85 transition-opacity pr-1"
            aria-label="Back to top"
          >
            <BrandLogo />
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo("education")} className="hover:text-white transition-colors">Education</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">Contact</button>
          <span className="w-px h-3.5 bg-neutral-800" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 hover:text-white font-medium flex items-center gap-1 transition-colors"
          >
            Resume <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 max-w-3xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for software engineering opportunities
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <span className="text-xl sm:text-3xl text-neutral-400 font-light">
              Hi, I&apos;m
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white">
              Nhat Minh Tran
            </h1>
            <p className="text-lg sm:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-500 pt-2 max-w-xl mx-auto">
              I build resilient software, systems & distributed backends.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-40 sm:gap-52 relative z-10">
        
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-10 pt-16"
        >
          <SectionHeader title="About" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 sm:gap-14">
            {/* Circular Profile Picture */}
            <div className="relative shrink-0">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl">
                <Image
                  src="/avatar.jpg"
                  alt="Nhat Minh Tran"
                  fill

                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* About Text + Technology Grid */}
            <div className="flex flex-col gap-5 text-left flex-1">
              <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
I am a Software Engineer with a strong interest in Full-Stack Engineering, Cloud Computing, and DevOps. I enjoy designing software architectures, building scalable applications, and understanding how different components work together to create reliable and efficient systems.              </p>

              <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light">I am particularly interested in the intersection of application development and infrastructure — from designing clean backend architectures and distributed systems to deploying, monitoring, and optimizing applications in the cloud. I enjoy solving complex engineering problems and turning ideas into well-structured, maintainable, and production-ready software.</p>
              <div className="flex flex-col gap-3 pt-3">
                <p className="text-neutral-400 text-xs sm:text-sm font-light">
                  Here are a few technologies I&apos;ve been working with recently:
                </p>

                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-neutral-300">
                  {technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#00d2ff] text-xs">▹</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-10"
        >
          <SectionHeader title="Education" />

          <div className="relative group overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/30 p-8 sm:p-10 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 backdrop-blur-md">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#00d2ff]/15 via-blue-500/10 to-transparent blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl border border-[#00d2ff]/20 bg-[#00d2ff]/10 text-[#00d2ff] shrink-0 mt-1 md:mt-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                    Eötvös Loránd Tudományegyetem (ELTE)
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light">
                    Bachelor of Science in Computer Science
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Budapest, Hungary</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/70 text-xs sm:text-sm font-mono text-neutral-400 w-fit shrink-0 md:self-start">
                <Calendar className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>2025 — 2028</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Selected Projects */}
        <section id="projects" className="flex flex-col gap-10">
          <SectionHeader title="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  {/* Top Image Preview Area */}
                  <div className="relative w-full h-48 sm:h-52 bg-white overflow-hidden border-b border-neutral-800 flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                        {proj.title}
                      </h3>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {proj.subtitle}
                    </p>
                    <p className="text-xs text-neutral-300/80 leading-relaxed pt-1">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-neutral-950/70 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section: Let's Connect */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-8 pt-10 pb-20"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-baseline">
              Let&apos;s Connect
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00d2ff] ml-1.5 rounded-[2px]" />
            </h2>
            <div className="w-16 h-1 bg-[#00d2ff] rounded-full" />
          </div>

          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-md">
            If you&apos;re building something meaningful, let&apos;s talk.
          </p>

          <div className="w-8 h-8 rounded-full border border-neutral-700/60 bg-neutral-900/40 flex items-center justify-center shadow-inner my-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          <button
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-3.5 px-7 py-3.5 rounded-xl border border-neutral-700/70 bg-neutral-950 hover:border-neutral-500 transition-all duration-200 shadow-lg hover:shadow-black/50"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Mail className="w-4 h-4 text-[#00d2ff]" />
            )}
            <span className="text-sm sm:text-base font-medium text-white tracking-wide">
              {email}
            </span>
            <span className="text-xs text-neutral-400 pl-1 font-light">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href="https://github.com/MinhTran1212"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-neutral-800/90 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-700 text-sm font-medium text-neutral-200 transition-all hover:scale-[1.02] shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-neutral-300" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/minhtran1207/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-neutral-800/90 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-700 text-sm font-medium text-neutral-200 transition-all hover:scale-[1.02] shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d2ff] hover:bg-[#33dbff] text-neutral-950 text-sm font-semibold transition-all hover:scale-[1.02] shadow-md shadow-[#00d2ff]/20"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-900/80 text-center text-xs text-neutral-500 font-light tracking-wide pb-16">
          <p>© {new Date().getFullYear()} Nhat Minh Tran. Built with intention.</p>
        </footer>

      </main>
    </div>
  );
}