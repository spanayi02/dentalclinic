/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#eef0e6",
        paper: "#fbf8f2",
        ink: "#2a241d",
        inksoft: "#6b6154",
        pine: "#33544a",
        pinedeep: "#203831",
        pinetint: "#e4ece9",
        clay: "#bd6b39",
        claystrong: "#9c5527",
        claydeep: "#7e421c",
        claywash: "#f0e0cb",
      },
      fontFamily: {
        display: ['"GFS Didot"', '"Times New Roman"', "serif"],
        body: ['"Work Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      boxShadow: {
        card: "0 2px 4px rgba(42,36,29,0.06), 0 12px 28px -12px rgba(42,36,29,0.18)",
        cardHover: "0 4px 8px rgba(42,36,29,0.08), 0 20px 40px -14px rgba(42,36,29,0.28)",
      },
    },
  },
  plugins: [],
};
