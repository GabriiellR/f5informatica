import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export default ((props) => {

    return (
        <>
            <Swiper
                className="mySwiper"
                navigation={true}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        pavigation:false
                    },
                    800: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }}

            >
                {props.slide &&
                    props.slide.map((slide, index) => (
                        <SwiperSlide className="text-center text-lg bg-transparent flex justify-center items-center" key={index}>{slide}</SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );

})