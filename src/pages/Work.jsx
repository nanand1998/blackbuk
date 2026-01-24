import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "../components/ui/Button";

import projectShinde from "../assets/project-shinde.png";
import projectShopixx from "../assets/project-shopixx.png";
import projectHealthcare from "../assets/project-healthcare.png";

const Work = () => {
    const projects = [
        { title: "Shinde Agencies", category: "Hardware Wholesaler", tech: ["React", "Tailwind", "Framer Motion"], desc: "Modern catalog and business website for a hardware wholesale agency.", link: "https://shindeagencies.vercel.app/", image: projectShinde },
        { title: "Shopixx", category: "E-Commerce", tech: ["Next.js", "Stripe", "Sanity"], desc: "High-performance headless storefront scaling to 10k users/min.", link: "https://shopixx.vercel.app/login", image: projectShopixx },
        { title: "HealthCare Portal", category: "Enterprise", tech: ["React", "Node.js", "PostgreSQL"], desc: "HIPAA-compliant patient management system.", link: "#", image: projectHealthcare },
    ];

    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
                <p className="text-xl text-gray-400">
                    A showcase of our capabilities. We deliver results, not just code.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className="aspect-video relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                    <span className="text-white/80 group-hover:text-transparent transition-colors font-medium border border-white/30 px-4 py-1 rounded-full backdrop-blur-sm group-hover:opacity-0">Preview</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <span className="text-xs font-mono text-blue-400">{project.category}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
