import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-black hover:bg-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
        glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-primary/50",
        outline: "border border-white/20 text-white hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
