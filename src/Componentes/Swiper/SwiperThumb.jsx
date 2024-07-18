import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Autoplay, Navigation, Thumbs, FreeMode } from 'swiper/modules';

export default function SwiperThumb(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{ '--swiper-navigation-color': '#FE7A36' }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className='mySwiper2'
            >
                {props.imagem && props.imagem.map((imagem, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex w-full justify-center'>
                            <img className='aspect-4/2' src={imagem} alt={`Slide ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                spaceBetween={10}
                slidesPerView={7}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className='mySwiper mt-4'
                breakpoints={{
                    320: { // Configuração para telas pequenas (celulares)
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    640: { // Configuração para telas médias (tablets)
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    768: { // Configuração para telas maiores (pequenos desktops)
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: { // Configuração para telas grandes (desktops)
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1280: { // Configuração para telas maiores (grandes desktops)
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    1536: { // Configuração para telas muito grandes (ultrawide desktops)
                        slidesPerView: 7,
                        spaceBetween: 10,
                    }
                }}
            >
                {props.imagem && props.imagem.map((imagem, index) => (
                    <SwiperSlide key={index}>
                        <img className='' src={imagem} alt={`Thumb ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
