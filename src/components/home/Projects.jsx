import { useState } from 'react';
import Section from '../common/Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            _id: '1',
            title: 'Luxury Portfolio',
            description: 'A premium portfolio website with dark mode and glassmorphism.',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Portfolio',
            tags: ['React', 'Tailwind', 'Framer Motion'],
            category: 'Frontend',
            liveLink: '#',
            githubLink: '#'
        },
        {
            _id: '2',
            title: 'E-Commerce Dashboard',
            description: 'Full-stack admin dashboard for managing products and orders.',
            image: 'https://placehold.co/600x400/2c2c2c/FFF?text=Dashboard',
            tags: ['MERN', 'Redux', 'Charts'],
            category: 'Fullstack',
            liveLink: '#',
            githubLink: '#'
        }
    ];

    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

    return (
        <Section id="projects" title="Featured Projects" >
            {/* Filters */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-surface text-gray-400 hover:text-white border border-white/5'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={project._id}
                        className="glass-card overflow-hidden group"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary rounded-full text-black hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface text-white rounded-full hover:scale-110 transition-transform"><FaGithub /></a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold font-serif mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-primary rounded border border-white/10">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
