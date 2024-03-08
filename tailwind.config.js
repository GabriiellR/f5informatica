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
        corPrimaria: "#1d4567", //azul marca #043156
        // cor fonte
        corFonte: "#fff",
        // cor detalhes ex:botoes
        corSecundaria: "#FE7A36",

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

