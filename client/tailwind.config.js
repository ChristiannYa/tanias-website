export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ff-1": "var(--ff-1)",
        "ff-2": "var(--ff-2)",
        "ff-3": "var(--ff-3)",
        "ff-4": "var(--ff-4)",
        fCormorant: "var(--fCormorant)",
        fNewsreader: "var(--fNewsreader)",
        fCinzel: "var(--fCinzel)",
        fLato: "var(--fLato)",
      },
      fontSize: {
        "fs-0": "var(--fs-0)",
        "fs-1": "var(--fs-1)",
        "fs-2": "var(--fs-2)",
        "fs-3": "var(--fs-3)",
        "fs-4": "var(--fs-4)",
        "fs-5": "var(--fs-5)",
        "fs-6": "var(--fs-6)",
      },
      colors: {
        "bgc-1": "var(--bgc-1)",
        "acc-1": "var(--acc-1)",
        "acc-1-hover": "var(--acc-1-hover)",
        "acc-2": "var(--acc-2)",
        "acc-2-hover": "var(--acc-2-hover)",
        "acc-3": "var(--acc-3)",
        "acc-3-hover": "var(--acc-3-hover)",
        "fc-1": "var(--fc-1)",
        "fc-2": "var(--fc-2)",
        "fc-3": "var(--fc-3)",
        "fc-4": "var(--fc-4)",
        "fc-5": "var(--fc-5)",
      },
      boxShadow: {
        "bs-1": "var(--bs-1)",
        "bs-2": "var(--bs-2)",
      },
      borderRadius: {
        "rd-1": "var(--rd-1)",
      },
      backgroundImage: {
        "bgi-1": "var(--bgi-1)",
      },
    },
  },
  plugins: [],
};
