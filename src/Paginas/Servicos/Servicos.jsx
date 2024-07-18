import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faPhoenixFramework, faCloudscale, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Servicos = (() => {

    return (<>
        <div className="bg-ServicosStorage min-h-screen bg-no-repeat bg-cover md:bg-fixed relative">

            <div className="flex flex-col w-full min-h-screen justify-center items-center z-30 font-serif bg-black opacity-60">
                <div className="text-corFonte z-30 flex flex-col text-center font-bold p-2" data-aos="fade-right" data-aos-duration="1500">
                    <p className="text-lg md:text-3xl">Loja de informática</p>
                    <p>Venda de equipamentos para computadores e serviços de informática</p>
                </div>
            </div>
        </div>


        <div className="bg-ServicosLanHouse min-h-screen bg-no-repeat bg-cover md:bg-fixed relative">

            <div className="flex flex-col w-full min-h-screen justify-center items-center z-30 font-serif bg-black opacity-60">
                <div className="text-corFonte z-30 flex flex-col text-center font-bold p-2" data-aos="fade-right" data-aos-duration="1500">
                    <p className="text-lg md:text-3xl">Lan House</p>
                    <p>Jogue online com uma linha de computadores de última geração.</p>
                </div>
            </div>
        </div>


        <div className="bg-ServicosRepairDevices min-h-screen bg-no-repeat bg-cover md:bg-fixed relative">

            <div className="flex flex-col w-full min-h-screen justify-center items-center z-30 font-serif bg-black opacity-60">
                <div className="text-corFonte z-30 flex flex-col text-center font-bold p-2" data-aos="fade-right" data-aos-duration="1500">
                    <p className="text-lg md:text-3xl">Assistência Técnica</p>
                    <p>Reparo de computadores e notebooks</p>
                </div>
            </div>
        </div>

        <div className="bg-ServicosCurso min-h-screen bg-no-repeat bg-cover bg-center md:bg-fixed relative">

            <div className="flex flex-col w-full min-h-screen justify-center items-center z-30 font-serif bg-black opacity-60">
                <div className="text-corFonte z-30 flex flex-col text-center font-bold p-2" data-aos="fade-right" data-aos-duration="1500">
                    <p className="text-lg md:text-3xl">Cursos Profissionalizantes</p>
                    <p>Cursos para se profissionalizar e conquistar sua vaga no mercado de trabalho</p>
                </div>
            </div>
        </div>

    </>)

})

export default TransicaoPagina(Servicos);