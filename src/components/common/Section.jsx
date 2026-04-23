import { motion } from 'framer-motion';

const Section = ({ children, id, className = '', title, subtitle }) => {
    return (
        <section id={id} className={`py-20 relative ${className}`}>
            <div className="container mx-auto px-6">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        {title && <h2 className="text-3xl md:text-4xl font-bold mt-2  text-primary tracking-wide">{title}</h2>}
                        <div className="w-24 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
