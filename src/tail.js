tailwind.config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mfont: {
          DEFAULT: "#313131", //BLACK
          secondary: "#7D7373", //GRAY
          tertiary: "#C6C3C3", //GRAY V2
        },
        mbg: {
          primary: "#F81D1D", //RED
          secondary: "#0275D4", //BLUE
        },
      },
      spacing: {
        main: "188px",
        mob: "20px",
        20: "20px",
        25: "25px",
        10: "10px",
        15: "15px",
        30: "30px",
        80: "80px",
        100: "100px",
      },
      backgroundImage: {
        "c-gradient": "linear-gradient(to right, #000000 70%, #F81D1D 110%)",
      },
      screens: {
        s360: "360px",
        s1327: "1327px",
        s650: "650px",
        s550: "550px",
        s400: "400px",
        sssm: "450px",
        s700: "700px",
        s740: "740px",
        s887: "887px",
        s1440: "1440px",
        s1065: "1065px",
        s1105: "1105px",
        s1000: "1000px",
      },
    },
    plugins: [],
  },
};
