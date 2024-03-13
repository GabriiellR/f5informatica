import CardImage from "../../Componentes/Card/CardImage";
import informatica from '../../Imagens/Cursos/informatica.jpg'
import SwiperCard from "../../Componentes/Swiper/SwiperCard";

export default (() => {
    return (<>
        <div className="min-h-screen bg-gradient-to-b from-corPrimaria to-black flex flex-col p-10" id="cursos">

            <div className="text-corFonte text-3xl font-bold text-center">Conheça nossos <span className="rounded-md px-2 py-1 bg-corSecundaria">cursos</span></div>

            <div className="mt-14 ">

                <SwiperCard
                    slide={[<CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos, além de uma abordagem ampla no uso da internet."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos, além de uma abordagem ampla no uso da internet."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos, além de uma abordagem ampla no uso da internet."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos, além de uma abordagem ampla no uso da internet."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos, além de uma abordagem ampla no uso da internet."
                        imagem={informatica}
                    />,]}
                />
            </div>

        </div>
    </>)
})