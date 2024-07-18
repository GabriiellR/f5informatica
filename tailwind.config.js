/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        corPrimaria: "#FE7A36",
        corFonte: "#fff",
        corSecundaria: "#1d4567",
      },

      backgroundImage: {
        Inicio: "url('/src/Imagens/Inicio/pessoas.jpg')",
        Sobrenos: "url('/src/Imagens/Sobrenos/sobrenos.jpg')",

        ServicosCurso: "url('/src/Imagens/Servicos/Cursos.jpg')",
        ServicosLanHouse: "url('/src/Imagens/Servicos/LanHouse.jpg')",
        ServicosRepairDevices: "url('/src/Imagens/Servicos/RepairDevices.jpg')",
        ServicosStorage: "url('/src/Imagens/Servicos/Storage.jpg')",
      },

      minHeight: {
        screen: "90vh"
      },

      aspectRatio: {
        '4/2': '4/2',
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

