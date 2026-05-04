"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "SMK (Pengembangan Perangkat Lunak dan Gim)",
            school: "SMK Ghama Caraka",
            year: "2024",
            score: "",
            details: "Focused on software engineering and game development with practical industry experience.",
            url: "https://sekolahghama.com/"
        },
        {
            degree: "Islamic Boarding School (MTs Darul Fallah)",
            school: "Pesantren Pertanian Darul Fallah",
            year: "2020",
            score: "",
            details: "Combined religious education with agricultural skills and entrepreneurship development.",
            url: "https://pesantrendarulfallah.wordpress.com/"
        }
    ];

    return (
        <section id="education" aria-label="Academic Background" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-violet-500 w-10 h-10" />
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-violet-500/50 hover:bg-slate-800/60 transition-all cursor-pointer group hover:-translate-y-1 shadow-lg hover:shadow-violet-900/20"
                        >
                            <div className="flex-shrink-0 bg-violet-500/10 p-4 rounded-lg">
                                <Award className="w-8 h-8 text-violet-400" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-violet-300 transition-colors">{edu.degree}</h3>
                                <p className="text-violet-400 font-medium mb-2">{edu.school}</p>
                                <p className="text-slate-400 text-sm">{edu.details}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-2 text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.year}</span>
                                <span className="w-px h-4 bg-slate-700 mx-2"></span>
                                <span className="text-violet-400 font-bold">{edu.score}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
