import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4096b5",
        secondary: "#ff5a00",
        heading: "#000219",
        body: "#4b5280",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1260px",
        },
      },
      boxShadow: {
        custom: "0 0 20px 3px rgba(0, 0, 0, 0.05)",
      },
      transitionDuration: {
        DEFAULT: "500ms",
      },
    },
  },
  plugins: [],
};

export default config;

