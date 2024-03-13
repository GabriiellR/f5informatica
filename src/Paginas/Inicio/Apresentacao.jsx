import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import CardImage from "../../Componentes/Card/CardImage";
import SwiperCard from "../../Componentes/Swiper/SwiperCard";

import informatica from '../../Imagens/Cursos/informatica.jpg'

export default (() => {

    const frases = ["O próximo nível aguarda por você!",
        "A próxima etapa é um convite à superação!",
        "Descubra o potencial além do esperado!",
        "Prepare-se para voos mais altos!"
    ];
    return (<>
        <div className="bg-Inicio min-h-screen bg-no-repeat bg-cover bg-fixed relative">
            <div className="min-h-screen min-w-full bg-black opacity-50 absolute inset-0"> </div>

            <div className="flex flex-col w-full min-h-screen justify-center items-center z-30 font-serif">
                <div className="text-corFonte z-30 flex flex-col text-center font-bold">
                    <p className="text-3xl">Eleve o seu conhecimento com a F5 Informática:</p>
                    <p className="text-corPrimaria text-2xl"><Typewriter
                        options={{
                            strings: frases,
                            autoStart: true,
                            cursor: '|',
                            delay: 60,
                            deleteSpeed: 30,
                            loop: true
                        }} /></p>
                </div>
                <div className="absolute bottom-1">
                    <a href="#cursos">
                        <button className="animate-bounce w-14 h-14  text-corFonte bg-corSecundaria rounded-full">
                            <FontAwesomeIcon size="2xl" icon={faDownLong} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </>)
});

