import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina"
import SwiperThumb from "../../Componentes/Swiper/SwiperThumb";

import imagem1 from '../../Imagens/Galeria/1.jpg';
import imagem2 from '../../Imagens/Galeria/2.jpg';
import imagem3 from '../../Imagens/Galeria/3.jpg';
import imagem4 from '../../Imagens/Galeria/4.jpg';
import imagem5 from '../../Imagens/Galeria/5.jpg';
import imagem6 from '../../Imagens/Galeria/6.jpg';
import imagem7 from '../../Imagens/Galeria/7.jpg';
import imagem8 from '../../Imagens/Galeria/8.jpg';
import imagem9 from '../../Imagens/Galeria/9.jpg';
import imagem10 from '../../Imagens/Galeria/10.jpg';
import imagem11 from '../../Imagens/Galeria/11.jpg';
import imagem12 from '../../Imagens/Galeria/12.jpg';
import imagem13 from '../../Imagens/Galeria/13.jpg';

const Galeria = (() => {

    return (<>
        <div className="p-5 bg-gradient-to-b from-corSecundaria to-black min-h-screen flex flex-col gap-7">

            <div className="text-corFonte text-3xl font-bold text-center mt-4">Galeria de <span className="rounded-md px-2 py-1 bg-corPrimaria" data-aos="fade-right" data-aos-duration="1500">Fotos</span></div>
            <div className="mt-5">
                <SwiperThumb imagem={[imagem1,
                    imagem2,
                    imagem3,
                    imagem4,
                    imagem5,
                    imagem6,
                    imagem7,
                    imagem8,
                    imagem9,
                    imagem10,
                    imagem11,
                    imagem12,
                    imagem13
                ]} />
            </div>
        </div>
    </>)
})

export default TransicaoPagina(Galeria);