import React from 'react'
import { Button } from "../components/ui/button";
import {
  Github,
  Linkedin,
  Facebook,
  Phone,
  Download,
  Mail,
  Briefcase,
} from "lucide-react";
import profilePhoto from "../assets/profile-photo.png";
import TypingAnimation from "./TypingAnimation";

const Hero = ({ scrollToSection, downloadCV }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 animate-in slide-in-from-left duration-1000"
            data-aos="fade-right"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Rana Islam
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                <TypingAnimation
                  texts={[
                    "Full Stack Developer",
                    "MERN Stack Specialist",
                    "Web Designer",
                  ]}
                />
              </h2>
            </div>

            <div
              className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-in slide-in-from-bottom duration-1000 delay-300"
              data-aos="fade-up"
            >
              <p>
                I'm a passionate developer with expertise in modern web
                technologies. Passionate about turning ideas into reality
                through clean, efficient code.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-1000 delay-1000"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="text-lg px-8 py-3 hover:scale-105 transition-transform   bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 hover:scale-105 transition-transform   border-primary hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 hover:scale-105 transition-transform   border-primary hover:bg-primary/10"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* GitHub */}
              <a
                href="https://github.com/ranaIslam01?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ranaislam2255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>

              {/* WhatsApp */}
              <a
                href="https://+8801840248746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/tomar-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-500"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-cyan-500 rounded-full animate-spin-slow p-1">
                <div className="bg-background rounded-full h-full w-full"></div>
              </div>

              {/* Profile image */}
              <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={profilePhoto}
                  alt="Rana Islam - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full animate-bounce delay-1500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

