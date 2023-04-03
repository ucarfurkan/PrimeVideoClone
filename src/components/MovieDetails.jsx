import { useLocation } from "react-router-dom"
import { FaPlay, FaInfo } from 'react-icons/fa';
import { BsCheckCircleFill } from "react-icons/bs"

function MovieDetails() {
    const location = useLocation();
    console.log(location)
    const movie = location.state.movie;
    const movieImgPath = location.state.movie.spotlightImgPath.replace(/ /g, '%20').slice(1);

    console.log(movieImgPath)
    return (
        <>
            <div className="movie-details d-flex align-items-center">
                <img className="movie-details-img" src={movieImgPath}></img>
                <div className="movie-details-desc">
                    <div className="movie-details-title">
                        {movie.title}
                    </div>
                    <div className="movie-details-about mt-2">
                        {movie.description}
                    </div>
                    <div className='iw-prime'><BsCheckCircleFill fill="cyan" />  Included with Prime</div>
                    <div className='movie-details-button-group d-flex justify-content-start align-items-center'>
                        <div className='play-button'><FaPlay /></div>
                        <div className='play-text'>Play</div>
                        <div className='watchlist-button'>+</div>
                        <div className='details-button'><FaInfo /></div>
                    </div>
                </div>
                <div className="movie-details-overlay"></div>
            </div>

        </>
    )
}

export default MovieDetails;