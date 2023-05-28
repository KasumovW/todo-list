/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFFDF4',
                secondary: '#DFBD43',
                third: '#4D4117',
                fourth: '#444444',
            },
        },
    },
    plugins: [],
};

