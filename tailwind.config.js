/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-black': '#151515',
                'neon-green': '#4EE1A0',
                'light-black': '#242424',
                grey: '#D9D9D9',
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Space Grotesk'],
            },
        },
    },
    plugins: [require('daisyui')],
};
