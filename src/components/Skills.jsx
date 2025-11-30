import React from "react";

const Skills = () => {
  const skillsData = [
    { name: "MongoDB", category: "Database", color: "from-green-500 to-green-600" },
    { name: "Express.js", category: "Backend", color: "from-gray-500 to-gray-600" },
    { name: "React.js", category: "Frontend", color: "from-blue-500 to-blue-600" },
    { name: "Node.js", category: "Runtime", color: "from-green-600 to-green-700" },
    { name: "JavaScript", category: "Language", color: "from-yellow-500 to-yellow-600" },
    { name: "HTML5", category: "Markup", color: "from-orange-500 to-orange-600" },
    { name: "CSS3", category: "Styling", color: "from-blue-400 to-blue-500" },
    { name: "Tailwind CSS", category: "Framework", color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div
          className="text-center mb-16 animate-in fade-in duration-1000"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Skills & Technologies
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Technologies I use to craft clean, fast & scalable web applications.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1 animate-in fade-in duration-700"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform`}
              >
                {skill.name.charAt(0)}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>

              {/* Sub title */}
              <p className="text-sm text-muted-foreground text-center mt-1">
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
