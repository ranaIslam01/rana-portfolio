import { ExternalLink } from "lucide-react";
import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "Currently developing a full-featured e-commerce platform using the MERN stack with modern UI/UX design and responsive layout.",
      technologies: ["React", "Node.js", "MongoDB"],
      techColors: "bg-primary/10 text-primary",
      link: "https://ecommerce-rana-islam.vercel.app",
      gradient: "from-primary to-purple-600",
    },
    {
      title: "Swift Express Cargo",
      description:
        "This responsive portfolio website built with html, Tailwind CSS, JavaScript, featuring dark/light mode and smooth animations.",
      technologies: ["HTML5", "Tailwind", "Javascript"],
      techColors: "bg-cyan-500/10 text-cyan-600",
      link: "https://bd-calling-project-03.vercel.app/",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "FileWisely",
      description:
        "This responsive portfolio website built with html, CSS.",
      technologies: ["HTML5", "CSS3"],
      techColors: "bg-cyan-500/10 text-cyan-600",
      link: "https://bd-calling-project-2.vercel.app/",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Countries Viewer",
      description:
        "Countries Viewer is a simple and interactive web app that displays data about countries from around the world.",
      technologies: ["HTML5", "CSS3","JAVASCRIPT"],
      techColors: "bg-cyan-500/10 text-cyan-600",
      link: "https://countries-viewer.vercel.app/",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Shopsy",
      description:
        "Shopsy হল একটি আধুনিক এবং প্রতিক্রিয়াশীল ই-কমার্স প্ল্যাটফর্ম যা React, Vite, এবং Tailwind CSS ব্যবহার করে তৈরি করা হয়েছে।",
      technologies: ["REACT","TAILWIND CSS", "AOS"],
      techColors: "bg-cyan-500/10 text-cyan-600",
      link: "https://shopsy-gold.vercel.app/",
      gradient: "from-green-500 to-yellow-600",
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "ShopHTML, CSS ও JavaScript দিয়ে বানানো একটি সাধারন ২-জনের টিক-ট্যাক-টো গেম।",
      technologies: ["HTML5", "CSS3","JAVASCRIPT"],
      techColors: "bg-cyan-500/10 text-cyan-600",
      link: "https://tic-tac-toe-game-prnx.vercel.app/",
      gradient: "from-blue-500 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-in fade-in duration-1000"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all   group hover:scale-105 animate-in slide-in-from-left duration-500"
              data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={index * 200}
            >
              <div className="space-y-4">
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                ></div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${project.techColors} rounded-full text-sm hover:bg-primary/20 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 text-black">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center text-sm font-medium border border-gray-300 py-1 px-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

