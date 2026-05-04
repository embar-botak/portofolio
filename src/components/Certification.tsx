"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Calendar, ExternalLink, X, Image as ImageIcon } from 'lucide-react';

interface Cert {
    title: string;
    issuer: string;
    date: string;
    url: string;
    skills: string[];
    image?: string;
}

const Certification = () => {
    const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

    const certifications: Cert[] = [
        {
            title: "Introduction to Financial Literacy",
            issuer: "Dicoding Academy",
            date: "December 12, 2025",
            url: "https://dicoding.com/certificates/98XWOJ1JLZM3",
            skills: ["Financial Literacy", "Personal Finance", "Investment"],
            image: "/dicoding-financial-literacy.png"
        },
        {
            title: "KRL Schedule Application Development Workshop",
            issuer: "SMK Ghama Caraka & MeetAp",
            date: "April 25, 2026",
            url: "#",
            skills: ["REST API", "Web Development", "Mobile App"],
            image: "/krl-workshop-cert.png"
        },

    ];

    return (
        <section id="certification" aria-label="Certifications" className="py-20 relative bg-slate-950">
            {/* Background element */}
            <div className="absolute top-40 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <BadgeCheck className="text-violet-500 w-10 h-10" />
                        Certifications
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
                    <p className="text-slate-400 mt-4 max-w-2xl">
                        Professional achievements and certifications to enhance skills and validate expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all group flex flex-col h-full ${cert.image ? 'cursor-pointer' : ''}`}
                            onClick={() => cert.image && setSelectedCert(cert)}
                        >
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-violet-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-violet-400 font-medium mb-4">{cert.issuer}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-900/50 text-slate-300 text-xs rounded-md border border-slate-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{cert.date}</span>
                                </div>
                                <div className="flex gap-2">
                                    {cert.image && (
                                        <button
                                            className="p-2 bg-slate-900/50 hover:bg-violet-600 text-slate-400 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                                            title="Lihat Sertifikat"
                                        >
                                            <ImageIcon className="w-4 h-4" />
                                        </button>
                                    )}
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-slate-900/50 hover:bg-violet-600 text-slate-400 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                                        aria-label={`Buka tautan ${cert.title}`}
                                        title="Buka Tautan Verifikasi"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full Screen Image Modal */}
                <AnimatePresence>
                    {selectedCert && selectedCert.image && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
                            >
                                <div className="relative pointer-events-auto">
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="absolute -top-12 right-0 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-20"
                                    >
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                    <img
                                        src={selectedCert.image}
                                        alt={`Sertifikat ${selectedCert.title}`}
                                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center">
                                        <div>
                                            <h4 className="text-white font-bold">{selectedCert.title}</h4>
                                            <p className="text-slate-300 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                                        </div>
                                        <a
                                            href={selectedCert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                                        >
                                            Verifikasi <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certification;
