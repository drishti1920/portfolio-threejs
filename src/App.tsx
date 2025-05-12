import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Map,
  Server,
} from "lucide-react";
import ThreeJSBackground from "./components/ThreeJSBackground";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import "./index.css";

// Project data
const projects = [
  {
    title: "E-commerce Admin Panel",
    description:
      "A modern admin dashboard with analytics, inventory management, and order processing features.",
    tags: ["React", "NodeJS", "MongoDB", "ExpressJS", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    github: "#",
    live: "#",
  },
  {
    title: "B2B E-commerce Solutions",
    description:
      "Mobile-first web application that helps users find recipes based on ingredients they have.",
    tags: [
      "React",
      "Bootstrap",
      "API Integration",
      "Responsive Design",
      "NodeJS",
    ],
    image:
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=2067",
    github: "#",
    live: "#",
  },
  {
    title: "Dev Tool Hub",
    description:
      "A collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["Vite", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072",
    github: "https://github.com/drishti1920/dev-tools-hub",
    live: "https://dev-tool-hub.netlify.app/",
  },
    {
    title: "Icon Library",
    description:
      "An icon library for easy implementation in the project.",
    tags: ["Vite", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072",
    github: "https://github.com/drishti1920/icon-library",
    live: "https://iconicvista.netlify.app/",
  },
];

const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    description:
      "Creating responsive and interactive user interfaces with modern frameworks and tools.",
  },

  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    description: "Building robust server-side applications and RESTful APIs.",
  },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 – Present",
    description:
      "Developed and maintained responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to deliver seamless user experiences.",
    skills: ["React", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "InnovateX",
    period: "Jun 2023 – Dec 2023",
    description:
      "Built full-stack features for internal tools, including authentication and dashboard analytics. Worked with MongoDB, Express, and Node.js for backend services.",
    skills: ["Node.js", "Express", "MongoDB", "React"],
  },
];

export function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    document.body.style.fontFamily = "Poppins, sans-serif";

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ThreeJSBackground />
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-60">
          {/* This empty div allows the ThreeJSBackground to shine through */}
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-block px-4 py-1 rounded-full bg-[#626F47]/10 text-[#626F47] font-medium"
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Drishti <span className="text-[#626F47]">Saraf</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full-stack developer with a strong foundation in frontend
              development and skilled in crafting responsive, user-friendly
              interfaces while seamlessly integrating powerful backend systems
              to deliver end-to-end digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="button-primary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="button-outline px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-16 flex justify-center gap-10 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["ReactJS", "ExpressJS", "Tailwind", "MongoDB", "Node.js"].map(
                (tech, index) => (
                  <motion.span
                    key={index}
                    className="text-sm md:text-base"
                    whileHover={{ y: -5, color: "#626F47" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              About <span className="text-[#626F47]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[#626F47] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-10 items-center text-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                Full Stack Developer with Frontend Expertise
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                With over a year of professional experience, I specialize in
                building clean, efficient, and scalable full-stack web
                applications. While I bring a strong command of backend
                development, my passion for frontend design ensures every
                interface is both visually appealing and user-friendly.
              </p>
              <p className="text-gray-600 mb-6 text-center md:text-left">
                I enjoy solving complex problems by crafting seamless full-stack
                solutions and translating ideas into intuitive, visually
                polished interfaces. When I'm not coding, I’m exploring new
                technologies, contributing to open-source projects, or sketching
                out fresh UI and product concepts.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-gray-600">Drishti Saraf</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-gray-600">drishtisaraf74@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-gray-600">India</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-gray-600">Full-time</p>
                </div>
              </div>

              <motion.a
                href="#"
                className="button-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              My <span className="text-[#626F47]">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-[#626F47] mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bento-card flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm text-[#626F47] font-medium">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-md font-semibold mb-2 text-gray-700">
                  {exp.company}
                </h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#626F47]/10 text-[#626F47]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              My <span className="text-[#626F47]">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-[#626F47] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and skills I've been working with to
              create modern web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bento-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[#626F47]/10 flex items-center justify-center mb-4 text-[#626F47]">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bento-grid">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "ReactJS",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "Bootstrap",
              "Responsive Design",
              "RESTful APIs",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bento-card flex items-center justify-center py-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Featured <span className="text-[#626F47]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#626F47] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my technical
              skills and design aesthetic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bento-card overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#626F47]/10 text-[#626F47]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-[#626F47]"
                  >
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-[#626F47]"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Get in <span className="text-[#626F47]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#626F47] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#626F47]/10 flex items-center justify-center mr-4 text-[#626F47] flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:hello@example.com"
                      className="text-gray-600 hover:text-[#626F47]"
                    >
                      drishtisaraf74@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#626F47]/10 flex items-center justify-center mr-4 text-[#626F47] flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-gray-600 hover:text-[#626F47]"
                    >
                      +91 9166063718
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#626F47]/10 flex items-center justify-center mr-4 text-[#626F47] flex-shrink-0">
                    <Map className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#626F47] text-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                drishti<span className="text-[#d4a373]">Portfolio</span>
              </h2>
              <p className="mt-2 text-sm text-white/80">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/drishti1920"
                target="_blank"
                className="hover:text-[#d4a373] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/drishti-saraf/"
                target="_blank"
                className="hover:text-[#d4a373] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
