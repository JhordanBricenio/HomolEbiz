/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        whitesmoke: "#eee",
        steelblue: {
          "100": "#639ec2",
          "200": "#4a94c0",
          "300": "#0067a3",
        },
        white: "#fff",

        gold: "#ffcc02",
//         red: "#ff1717",
//         limegreen: "#1dd03a",
        
        whitesmoke: "#f3f3f3",
        white: "#fff",
        black: "#000",
        dimgray: "rgba(110, 107, 107, 0.6)",


        "native-scrollbar-bg": "#eee",
        "white-color": "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.38)",
          "200": "rgba(255, 255, 255, 0.87)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.2)",
        },
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        "grey-400": "#bdbdbd",
        divider: "rgba(0, 0, 0, 0.12)",
        darkslateblue: "#1b3e85",
        cornflowerblue: "#2299e4",


        whitesmoke: "#eee",
        "white-color": "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0)",
          "200": "rgba(0, 0, 0, 0.2)",
        },
        cornflowerblue: {
          "100": "#2299e4",
          "200": "rgba(34, 153, 228, 0.87)",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        darkslateblue: "#1b3e85",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        divider: "rgba(0, 0, 0, 0.12)",
        deepskyblue: "#3bb3fc",
        darkgray: "#acacac",


        whitesmoke: "#ededed",
        white: "#fff",
        gold: "#ffcc02",
        red: "#ff1717",
        limegreen: "#1dd03a",
        black: "#000",
        cornflowerblue: "#2299e4"
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "typography-body2": "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "8xs": "5px",
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      inherit: "inherit",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",

      sm: "14px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },

      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}