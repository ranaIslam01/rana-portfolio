import React from 'react'
const Skills = () => {
  const skillsData = [
    {
      name: "MongoDB",
      category: "Database",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "React.js",
      category: "Frontend",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Node.js",
      category: "Runtime",
      color: "from-green-600 to-green-700",
    },
    {
      name: "JavaScript",
      category: "Language",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "HTML5",
      category: "Markup",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CSS3",
      category: "Styling",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      category: "Framework",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-in fade-in duration-1000"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I work with to build modern
            web applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all   text-center group hover:scale-105 animate-in fade-in duration-1000"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:rotate-12 transition-transform  `}
              >
                <span className="text-white font-bold text-lg">
                  {skill.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

