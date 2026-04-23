/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000', // Deep Pure Black
                surface: '#0A0A0A', // Near Black for cards
                surfaceHighlight: '#171717', // Slightly lighter for hover
                primary: '#A855F7', // Neon Purple (Purple-500)
                primaryDark: '#9333EA', // Purple-600
                secondary: '#EC4899', // Neon Pink/Red (Pink-500)
                accent: '#3B82F6', // Neon Blue (Blue-500)
                text: '#F3F4F6', // Gray-100
                textMuted: '#9CA3AF', // Gray-400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
                'neon-primary': '0 0 20px rgba(168, 85, 247, 0.2)',
                'neon-primary-strong': '0 0 15px rgba(168, 85, 247, 0.6)',
                'neon-primary-stronger': '0 0 30px rgba(168, 85, 247, 0.8)',
            },
            dropShadow: {
                'neon': '0 0 8px rgba(168, 85, 247, 0.5)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
