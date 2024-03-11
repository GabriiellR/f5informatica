/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // background
        corPrimaria: "#FE7A36", //azul marca #1d4567
        // cor fonte
        corFonte: "#fff",
        // cor detalhes ex:botoes
        corSecundaria: "#1d4567",
      },
      transformOrigin: {
        origin0: "0%",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

