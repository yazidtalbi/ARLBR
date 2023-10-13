/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ddd6fe",

          secondary: "#451930",

          accent: "#F2C94C",

          neutral: "#1a1a1a",

          "base-100": "#ffffff",

          info: "#D6EAEB",

          success: "#81328f",

          warning: "#ef8234",

          error: "#ea4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
