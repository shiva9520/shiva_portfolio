import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Nexora SaaS Landing Page",
    description: "An interactive SaaS landing page built with React, featuring smooth animations, responsive design, and immersive 3D visuals using Spline.",
    image: "/projects/project1.png",
    tags: ['ReactJS', 'Tailwind CSS', 'AOS', 'Spline 3D'],
    demoUrl:"https://nexora-pi-nine.vercel.app/",
    githubUrl: "https://github.com/shiva9520/Nexora",
  },
  {
    id: 2,
    title: "SaaS Gaming Website",
    description:
      "A modern SaaS gaming platform built with React and Tailwind CSS, featuring responsive design, rich game metadata, and smooth GSAP-powered animations.",
    image: "/projects/project2.png",
    tags: ["React.js", "TailwindCSS","GSAP"],
    demoUrl: "https://gaming-website-sable-phi.vercel.app/",
    githubUrl: "https://github.com/shiva9520/gaming-website",
  },
  {
    id: 3,
    title: "VaultX",
    description:
     "A modern finance management mobile app built with React Native and TypeScript, featuring secure Firebase authentication, transaction tracking, Redux-powered state management, and a smooth responsive UI.",
    image: "/projects/project4.png",
    tags: ["React Native", "Typescript","Firebase", "Redux Toolkit"],
    demoUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/119184406/574320521-72c144f4-2cce-4f4f-80a3-c903358b26bd.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260417T171945Z&X-Amz-Expires=300&X-Amz-Signature=0562366a1e62a22c5ae77ec398de4a7d166f7ccf214e7cd3f2c9ef3316a6608b&X-Amz-SignedHeaders=host&response-content-type=video%2Fmp4",
    githubUrl: "https://github.com/shiva9520/vaultX",
  },
  {
    id: 4,
    title: "InventoX",
    description:
      "A cross-platform React Native inventory management app with Firebase authentication and real-time stock tracking.",
    image: "/projects/project3.png",
    tags: ["React Native", "Firebase"],
    demoUrl: "https://drive.google.com/file/d/1YllYVc03vg4I9EG2Aj6CaaIc2_W8cQp4/view?usp=sharing",
    githubUrl: "https://github.com/shiva9520/InventoX",
  }, 
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.985 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shiva9520"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
