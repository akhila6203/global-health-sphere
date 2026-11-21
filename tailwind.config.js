/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sphere: {
          navy: "#123C8C",
          teal: "#079DA7",
          green: "#35C94A",
          cyan: "#12B8D0",
          ink: "#14243B",
          pale: "#F1FAFA"
        }
      }
    }
  },
  plugins: []
};
