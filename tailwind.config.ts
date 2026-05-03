import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pulse: {
          navy: "#08233d",
          navyDeep: "#031a30",
          copper: "#9b4c24",
          cream: "#f5efe6",
          paper: "#fbf8f2",
          ink: "#081f39",
          muted: "#754022"
        }
      },
      boxShadow: {
        soft: "0 22px 45px rgba(14, 28, 44, 0.16)",
        card: "0 18px 34px rgba(20, 29, 39, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
