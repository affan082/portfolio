import { motion } from 'framer-motion';
import Button from '../common/Button';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Gradient and Overlay */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background opacity-50 animate-pulse-slow"></div>
                {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.svg')] opacity-20"></div> */}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold  mb-6 leading-tight">
                        Hi, I'm <span className="text-neon animate-pulse-slow">Affan</span>
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-4xl text-gray-300 font-light mb-8"
                    >
                        A MERN Stack Developer
                    </motion.h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        A passionate Developer skilled in React.js and modern web technologies. I build clean, functional applications with attention to detail.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            variant="secondary"
                            onClick={() => {
                                const el = document.querySelector('#projects');
                                if (el) {
                                    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
                                    window.scrollTo({ top: offset, behavior: 'smooth' });
                                }
                            }}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                const el = document.querySelector('#contact');
                                if (el) {
                                    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
                                    window.scrollTo({ top: offset, behavior: 'smooth' });
                                }
                            }}
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
            >
                <FaArrowDown className="text-2xl" />
            </motion.div>
        </section>
    );
};

export default Hero;
