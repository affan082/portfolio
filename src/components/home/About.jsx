import Section from '../common/Section';
import { FaGraduationCap, FaCode, FaUserTie } from 'react-icons/fa';

const About = () => {
    const education = [
        {
            year: '2021 – 2026 (Expected)',
            degree: 'BS Information Technology',
            institution: 'University of the Punjab',
        },
        {
            year: '2019 – 2021',
            degree: 'FSc Pre-Engineering',
            institution: 'Superior College for Boys',
        },
        {
            year: '2017 – 2019',
            degree: 'Matriculation',
            institution: 'Govt Comprehensive High School',
        }
    ];

    return (
        <Section id="about" title="About Me" >
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                        I am a passionate <span className="text-primary font-bold">MERN Stack Developer</span> and IT graduate. My journey in tech started with a curiosity about how things work on the web, which led me to learn React.js and modern JavaScript. I enjoy creating clean, user-friendly interfaces with attention to detail.
                    </p>
                    <p className='text-lg'>
                       I build applications that are not only functional but also visually stunning. I believe in continuous learning and adapting to the latest industry trends.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 glass rounded-lg border-l-4 border-primary">
                            <FaCode className="text-2xl text-primary mb-2" />
                            <h4 className="font-bold text-white">Full Stack</h4>
                            <p className="text-sm text-gray-400">Frontend & Backend</p>
                        </div>
                        <div className="p-4 glass rounded-lg border-l-4 border-secondary">
                            <FaUserTie className="text-2xl text-secondary mb-2" />
                            <h4 className="font-bold text-white">Open</h4>
                            <p className="text-sm text-gray-400">To Opportunities</p>
                        </div>
                    </div>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-8 pl-8 md:pl-12">
                    {education.map((edu, idx) => (
                        <div key={idx} className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 bg-surface border border-primary p-2 rounded-full text-primary">
                                <FaGraduationCap />
                            </span>
                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                            <p className="text-primary text-sm mb-1">{edu.institution}</p>
                            <span className="text-xs text-gray-500 block mb-2">{edu.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
