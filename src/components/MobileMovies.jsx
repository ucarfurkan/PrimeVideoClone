import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '../data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MobileMovies() {
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation
                pagination={{ clickable: true }}
                watchSlidesVisibility={true}
                className='mt-2'
            >
                {data.map((movie) => {
                    console.log(movie)
                    return (
                        <SwiperSlide key={movie.id}>
                            <img src={movie.spotlightImgPath}></img>
                        </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default MobileMovies;