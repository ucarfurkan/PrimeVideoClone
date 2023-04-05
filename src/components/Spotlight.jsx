import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsCheckCircleFill } from "react-icons/bs"
import { FaPlay, FaInfo } from 'react-icons/fa';
import { Link } from "react-router-dom"


function Spotlight(props) {
    const data = props.datas;
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getSpotlights() {
        const spotlightData = data.filter(x => x.isSpotlight);
        return spotlightData.map(movie => (
            <Carousel.Item key={movie.title}>
                <div className='poster-container'>
                    {!isMobile && (
                        <>
                            <div className='item-desc'>
                                <div className='item-title'>{movie.title}</div><br />
                                <div className='iw-prime'><BsCheckCircleFill fill="cyan" />  Included with Prime</div>
                                <div className='item-button-group d-flex align-items-center'>
                                    <div className='play-button'><FaPlay /></div>
                                    <div className='play-text'>Play</div>
                                    <div className='watchlist-button'>+</div>
                                    <div className='details-button'><FaInfo /></div>
                                </div>
                            </div>
                            <div className="overlay"></div>
                        </>
                    )}
                    <Link to={`/content/${movie.title}`} state={{ movie }}>
                        <img
                            className="d-block w-100 poster"
                            src={movie.spotlightImgPath}
                            alt={movie.title}
                        />
                    </Link>
                </div>
            </Carousel.Item>
        ));
    }


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {getSpotlights()}
        </Carousel>
    );
}

export default Spotlight;