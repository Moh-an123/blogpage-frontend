// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "index.html",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/components/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: {
          foreground: "#36BA98",
          DEFAULT: "#36BA98",
        },
        button: {
          foreground: "#939185", // replace with your color
          DEFAULT: "#F4A261", // replace with your color
        },
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        // .. rest of the colors
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        // disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      
      },
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#fff", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FF02FF",
              DEFAULT: "#000",
            },
            secondary: {
              foreground: "#36BA98",
              DEFAULT: "#FDFFD2",
            },
            button: {
              DEFAULT: "#FF4191", // replace with your color
              foreground: "#000000", // replace with your color
            },
          },
          // ..
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
