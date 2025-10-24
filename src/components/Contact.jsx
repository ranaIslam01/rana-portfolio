import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Github, Facebook, Linkedin } from "lucide-react";
import React from 'react'
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-in fade-in duration-1000"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities to work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="space-y-8 animate-in slide-in-from-left duration-1000"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 hover:scale-105 transition-transform  ">
                  <div className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:dev.rana.cse@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dev.rana.cse@gmail.com <br />
                      ranaislam600837@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:scale-105 transition-transform  ">
                  <div className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+8801840248746"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +880 1840 248746 <br />
                      +880 1516596680
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:scale-105 transition-transform  ">
                  <div className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Dinajpur Sadar, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/ranaIslam01"
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
                  href="https://www.facebook.com/RanaFacebook01/"
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
                  href="https://wa.me/+8801840248746"
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
          </div>

          <div
            className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow   animate-in slide-in-from-right"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all   hover:border-primary/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all   hover:border-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all   hover:border-primary/50"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full hover:scale-105 transition-transform   bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

