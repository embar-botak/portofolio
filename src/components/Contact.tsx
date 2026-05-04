"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const contacts = [
        {
            title: "Email",
            value: "shadiqsardir@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=shadiqsardir@gmail.com",
            icon: <Mail className="w-8 h-8" />,
            colorClass: "text-violet-400 bg-violet-500/10",
            hoverBorder: "hover:border-violet-500/50 hover:shadow-violet-500/20",
            cta: "Send Email"
        },
        {
            title: "Phone / WhatsApp",
            value: "+62 812 9199 4792",
            href: "https://wa.me/6281291994792",
            icon: <Phone className="w-8 h-8" />,
            colorClass: "text-pink-400 bg-pink-500/10",
            hoverBorder: "hover:border-pink-500/50 hover:shadow-pink-500/20",
            cta: "Contact Now"
        },
        {
            title: "Location",
            value: "Meruyung, Depok, West Java",
            href: "https://www.google.com/maps/search/?api=1&query=Meruyung,+Depok,+Jawa+Barat,+Indonesia",
            icon: <MapPin className="w-8 h-8" />,
            colorClass: "text-blue-400 bg-blue-500/10",
            hoverBorder: "hover:border-blue-500/50 hover:shadow-blue-500/20",
            cta: "View on Map"
        }
    ];

    return (
        <section id="contact" aria-label="Contact Information" className="py-24 relative overflow-hidden bg-slate-900/50">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Let's Collaborate!</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Have a project idea, job offer, or just want to say hello? Don't hesitate to contact me through the information below.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className={`bg-slate-800/40 p-8 rounded-[32px] border border-slate-700/50 transition-all duration-300 group flex flex-col items-center cursor-pointer shadow-lg hover:shadow-2xl hover:bg-slate-800/80 ${contact.hoverBorder}`}
                        >
                            <div className={`p-5 rounded-2xl mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner ${contact.colorClass}`}>
                                {contact.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-200 mb-3">{contact.title}</h3>

                            <p className="text-slate-400 group-hover:text-slate-200 transition-colors text-center font-medium leading-relaxed mb-6">
                                {contact.value}
                            </p>

                            <div className={`mt-auto text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 ${contact.colorClass.split(' ')[0]}`}>
                                <span>{contact.cta}</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
