import CardImage from "../../Componentes/Card/CardImage";
import informatica from '../../Imagens/Inicio/informatica.jpg'
import SwiperCard from "../../Componentes/Swiper/SwiperCard";

export default (() => {
    
    return (<>
        <div className="min-h-screen bg-gradient-to-b from-corPrimaria to-black flex flex-col p-10" id="cursos">

            <div className="text-corFonte text-3xl font-bold text-center">Conheça nossos <span className="rounded-md px-2 py-1 bg-corSecundaria" data-aos="fade-left" data-aos-duration="1500">cursos</span></div>

            <div className="mt-14" data-aos="fade-right" data-aos-duration="1500">

                <SwiperCard
                    slide={[<CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos. "
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos."
                        imagem={informatica}
                    />,
                    <CardImage
                        titulo="Informática para adultos"
                        descricao="Curso voltado para o público adulto e terceira idade para aprender a utilizar o computador e seus recursos básicos."
                        imagem={informatica}
                    />,]}
                />
            </div>

        </div>
    </>)
})