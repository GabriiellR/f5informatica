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

      backgroundImage: {
        Inicio: "url('/src/Imagens/Inicio/pessoas.jpg')",
      },

      minHeight: {
        screen: "90vh"
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

