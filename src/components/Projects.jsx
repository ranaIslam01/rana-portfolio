import { ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const projectsData = [
    {
      title: "Swift Express Cargo",
      category: "Courier Service",
      image: "swift cargo express.png",
      description:
        "Responsive Multi page built using HTML, Tailwind CSS & JavaScript. This project includes a courier service landing page with animated UI sections, fully mobile friendly layouts and optimized loading performance.",
      technologies: ["HTML5", "Tailwind", "JavaScript", "Figma"],
      link: "https://bd-calling-project-03.vercel.app/",
      github: "https://github.com/ranaIslam01/swift-express-cargo",
    },
    {
      title: "Dragon News",
      category: "Online News Portal",
      image: "Dragon News.png",
      description:
        "Responsive news web app built with React, Tailwind CSS, and Firebase Authentication, featuring private routes, reusable components, and real-time toast notifications. Includes dynamic category-based news browsing.",
      technologies: ["React", "Firebase Auth", "Tailwind CSS-v4"],
      link: "https://dragon-news-2-1d8e0.web.app/category/0",
      github: "https://github.com/ranaIslam01/dragon-news",
    },
    {
      title: "Motor Garage",
      category: "Automotive Business Website",
      image: "Motor Garage.png",
      description:
        "A modern and fully responsive auto-service website built with React and Tailwind CSS. It features dynamic service pages, a booking modal, blog section, contact form, and Google Maps integration — optimized for clean UI, fast performance, and seamless user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript","Figma"],
      link: "https://motor-garage.vercel.app/",
      github: "https://github.com/ranaIslam01/motor-garage",
    },
    {
      title: "Book Vibe",
      category: "Web App",
      image: "Book Vibe.png",
      description:
        "Book collection web app with API integration, clean UI & reusable components. Users can explore books with detailed pages, wishlist options, and dynamic page routing.",
      technologies: ["React", "TailwindCss", "Axios", "Figma"],
      link: "https://book-vibe-blush.vercel.app/",
      github: "https://github.com/ranaIslam01/book-vibe",
    },
    {
      title: "Peddy",
      category: "Pet Adoption",
      image: "Peddy.png",
      description:
        "Clean & responsive pet adoption website built using HTML, CSS & JavaScript. Includes pets listing, filtering options, and beautiful UI animations.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "https://peddy-xi.vercel.app/",
      github: "https://github.com/ranaIslam01/peddy",
    },
    {
      title: "Countries Viewer",
      category: "Data App",
      image: "Country View.png",
      description:
        "Simple interactive countries viewer using REST Countries API. Includes search system and clean layout for browsing country details.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "https://countries-viewer.vercel.app/",
      github: "https://github.com/ranaIslam01/countries-viewer",
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-3">
            A showcase of some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => {
            const shortText = project.description.slice(0, 90);
            const isExpanded = expanded === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-card rounded-xl border shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {isExpanded ? project.description : `${shortText}...`}
                  </p>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {isExpanded ? "Show Less ▲" : "Show More ▼"}
                  </button>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium border border-gray-300 py-2 px-3 rounded-lg hover:bg-primary hover:text-white transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium border border-gray-300 py-2 px-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
