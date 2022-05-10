module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        docTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        extend: {
          backgroundImage: {
            'banener-background': "url('/src/assets/images/chair.png')",

          }
        },
      },

      "dark",
      "cupcake",

    ],
  },
  plugins: [require("daisyui")],
}
