import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom"

function MobileMovies(props) {
    const data = props.datas;
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                focusableElements={false}
                navigation
                pagination={{ clickable: true }}
                className='mt-2'
            >
                {data.map((movie) => {
                    console.log(movie)
                    return (
                        <SwiperSlide key={movie.id}>
                            <div className='movie-col'>
                                <Link to={`/movies/${movie.title}`} state={{ movie }}>
                                    <img src={movie.spotlightImgPath}></img>
                                </Link>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default MobileMovies;