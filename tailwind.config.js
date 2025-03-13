/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 使用 class 策略进行明暗主题切换
  theme: {
    extend: {},
  },
  plugins: [],
};
