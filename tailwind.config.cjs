/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/banner.jpg')",
        main: "linear-gradient(-225deg, #a7b6db 0%, #87A7D9 50%, #DEF3F8 100%)",
        about: "url('/aboutpage-bg.png')",
        services: "linear-gradient(0deg, #f2e5dc 0%, #f2e5dc 100%)",
        contact: "url('/contactpage-bg.jpg')",
        contactform: "linear-gradient(0deg, #d4bdae 0%, #d4bdae 100%)",
      },
      fontFamily: {
        dm: ["Reddit Mono", "serif"],
        vary: ["Roboto", "serif"],
        jost: ["Reddit Mono", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#CDA274",
          200: "#292F36",
          300: "#F4F0EC",
          400: "#E2E2E2",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
