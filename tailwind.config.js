/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                bungee: "var(--font-bungee-outline)",
                pixel: "var(--font-pixelify)",
                rationale: "var(--font-rationale)",
                sixtyfour: "var(--font-sixtyfour)",
                tomorrow: "var(--font-tomorrow)",
            },
        },
    },
    plugins: [],
};

export default config;
