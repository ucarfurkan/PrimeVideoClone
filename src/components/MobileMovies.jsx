import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MobileMovies(props) {
    const data = props.datas;
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                focusableElements= {false}
                navigation
                pagination={{ clickable: true }}
                className='mt-2'
            >
                {data.map((movie) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <div className='movie-col'><img src={movie.spotlightImgPath}></img>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default MobileMovies;