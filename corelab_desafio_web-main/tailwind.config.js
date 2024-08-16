/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background_gray: "#F0F2F5",
        header: "#455A64",
        border_input: "#D9D9D9",
        placeholder: "#9A9A9A",
        placeholder_text_title: "#333333",
        placeholder_text_text: "#50656E",
        text_title: "#464646",
        text_text: "#4F4F4D",
        icon_search: "#9E9E9E",
        icon: "#51646E",
        paint: "#FFE3B3"
      },
      boxShadow:{
        custom: "1px 1px 3px 0px #00000040",
        notes: "2px 2px 3px 0px #00000040"
      },
      fontFamily:{
        inter:["Inter"]
      }
    },
  },
  plugins: [],
}