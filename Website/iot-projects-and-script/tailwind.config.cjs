/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",

            md: "900px",

            lg: "1080px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {},
    },
    plugins: [],
};
