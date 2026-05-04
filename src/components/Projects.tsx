"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, X } from 'lucide-react';

interface Project {
    title: string;
    role: string;
    desc: string;
    fullDesc?: string[];
    tags: string[];
    links?: { label: string; url: string; icon?: React.ReactNode }[];
    image?: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

    const projects: Project[] = [
        {
            title: "APP-KRL",
            role: "UI/UX Designer",
            desc: "An app for checking KRL schedules, routes, and station info in real-time.",
            fullDesc: [
                "Designed an intuitive mobile-first interface for KRL schedule searching.",
                "Created a search UI component featuring popular station selections.",
                "Implemented user-friendly and illustrative empty state designs.",
                "Utilized a modern purple color palette and clean typography to enhance UX."
            ],
            tags: ["Flutter", "Dart", "API"],
            image: "/krl-mockup.png"
        },
        {
            title: "Authentication UI Design",
            role: "UI/UX Designer",
            desc: "Modern login page interface design with clean typography and dynamic illustrations.",
            fullDesc: [
                "Designed user interfaces for Sign In and Sign Up pages.",
                "Combined minimalist typography elements with attractive sporty illustrations.",
                "Created a clear visual hierarchy for form components like text inputs, checkboxes, and access buttons.",
                "Designed Single Sign-On (SSO) integration options like 'Sign in with Google' for user convenience."
            ],
            tags: ["Figma", "UI/UX Design", "Web Design", "Illustration"],
            image: "/login-mockup.png"
        },
        {
            title: "e-Rapor Login UI Design",
            role: "UI/UX Designer",
            desc: "Login page interface design for a school's e-Rapor educational portal system.",
            fullDesc: [
                "Designed a responsive and professional login page layout for the e-Rapor academic portal.",
                "Combined school branding identity elements with dynamic student visual compositions.",
                "Created an authentication form hierarchy that includes credential inputs, academic year dropdowns, and remember-me options.",
                "Maintained aesthetic consistency with a clean color scheme (white, gray, and red accents)."
            ],
            tags: ["Figma", "UI/UX Design", "Web Design", "Education"],
            image: "/erapor-mockup.png"
        },
        {
            title: "Hospitality Authentication UI Design",
            role: "UI/UX Designer",
            desc: "Login page interface design for an exclusive resort and hospitality management application.",
            fullDesc: [
                "Designed a luxury resort-themed login page layout with the 'Damaga Suites' visual identity.",
                "Used a bright blue background combined with traditional floral pattern ornaments to create an elegant feel.",
                "Built form components (Username & Password) with a minimalist style inside a semi-transparent floating glass card.",
                "Focused on a centered layout design to highlight the logo and the main authentication form."
            ],
            tags: ["Figma", "UI/UX Design", "Hotel", "Web Design"],
            image: "/hotel-mockup.png"
        },
    ];

    return (
        <section id="projects" aria-label="Featured Software Projects" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl">
                        A selection of UI/UX designs and applications I have built.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedProject(project)}
                            className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 cursor-pointer group transition-all flex flex-col"
                        >
                            {/* Image Section - Top Half */}
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-700/50">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-800/50 rounded-lg flex items-center justify-center shadow-inner border border-slate-700/50 group-hover:scale-105 transition-transform duration-500">
                                        <span className="text-slate-500 font-medium text-sm">Image Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section - Bottom Half */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-200 mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors z-10"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                {selectedProject.image && (
                                    <div
                                        className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 mt-8 sm:mt-0 cursor-pointer group relative"
                                        onClick={() => setFullScreenImage(selectedProject.image || null)}
                                        title="Click to enlarge"
                                    >
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                            <span className="text-white font-medium px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">View Full Screen</span>
                                        </div>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{selectedProject.title}</h3>
                                <p className="text-violet-400 font-medium mb-6">{selectedProject.role}</p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Responsibilities & Key Features</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.fullDesc?.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md border border-slate-700 text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                                {selectedProject.links && (
                                    <div className="space-y-4 mt-8 pt-6 border-t border-slate-800">
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Links</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.links.map((link, i) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-violet-600/10 hover:bg-violet-600/20 text-violet-400 hover:text-violet-300 rounded-lg transition-colors border border-violet-500/20 hover:border-violet-500/40 text-sm font-medium"
                                                >
                                                    {link.label}
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Full Screen Image Modal */}
                <AnimatePresence>
                    {fullScreenImage && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setFullScreenImage(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
                            >
                                <div className="relative pointer-events-auto">
                                    <button
                                        onClick={() => setFullScreenImage(null)}
                                        className="absolute -top-12 right-0 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-20"
                                    >
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                    <img
                                        src={fullScreenImage}
                                        alt="Full Screen Preview"
                                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;

