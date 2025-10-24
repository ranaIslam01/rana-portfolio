import { MapPin } from "lucide-react";
import React from 'react'
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-in fade-in duration-1000"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science
            and web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-in slide-in-from-left duration-1000"
            data-aos="fade-right"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering graduate from Thakurgaon
                Polytechnic Institute, based in Dinajpur Sadar, Bangladesh. I
                have completed my diploma and am passionate about creating
                innovative web solutions using modern technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack web development using the MERN
                stack (MongoDB, Express.js, React.js, Node.js). I love
                building responsive, user-friendly applications that solve
                real-world problems and provide excellent user experiences.
              </p>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow   animate-in slide-in-from-right duration-1000"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform  ">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dinajpur Sadar, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform  ">
                <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">
                    🎓
                  </span>
                </div>
                <span>Diploma in CSE, Thakurgaon Polytechnic Institute</span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform  ">
                <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">
                    💻
                  </span>
                </div>
                <span>MERN Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

