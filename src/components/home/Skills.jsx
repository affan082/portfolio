import Section from '../common/Section';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    const skills = [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000267' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills" title="My Tech Stack" subtitle="Skills">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center"
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-4 p-6 glass-card group cursor-pointer"
                    >
                        <skill.icon className="text-5xl transition-colors duration-300 group-hover:text-primary" style={{ color: skill.color }} />
                        <h3 className="font-semibold text-gray-300 group-hover:text-white">{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Skills;
