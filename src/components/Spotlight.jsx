import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsCheckCircleFill } from "react-icons/bs"
import { FaPlay, FaInfo } from 'react-icons/fa';


function Spotlight() {
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

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='poster-container'>
                    {!isMobile && <>
                        <div className='item-desc'>
                            <div className='item-title'>THE BOYS</div><br />
                            <div className='iw-prime'><BsCheckCircleFill fill="cyan" />  Included with Prime</div>
                            <div className='item-button-group d-flex align-items-center'>
                                <div className='play-button'><FaPlay /></div>
                                <div className='play-text'>Play</div>
                                <div className='watchlist-button'>+</div>
                                <div className='details-button'><FaInfo /></div>
                            </div>
                        </div>
                        <div className="overlay"></div>
                    </>}
                    <img
                        className="d-block w-100 poster"
                        src="./images/The Boys.jpg"
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='poster-container'>
                    {!isMobile && <>
                        <div className='item-desc'>
                            <div className='item-title'>Ghostbusters</div><br />
                            <div className='iw-prime'><BsCheckCircleFill fill="cyan" />  Included with Prime</div>
                            <div className='item-button-group d-flex align-items-center'>
                                <div className='play-button'><FaPlay /></div>
                                <div className='play-text'>Play</div>
                                <div className='watchlist-button'>+</div>
                                <div className='details-button'><FaInfo /></div>
                            </div>
                        </div>
                        <div className="overlay"></div>
                    </>}
                    <img
                        className="d-block w-100 poster"
                        src="./images/Ghostbusters.jpg"
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='poster-container'>
                    {!isMobile && <>
                        <div className='item-desc'>
                            <div className='item-title'>The Marvelous Mrs. Maisel</div><br />
                            <div className='iw-prime'><BsCheckCircleFill fill="cyan" />  Included with Prime</div>
                            <div className='item-button-group d-flex align-items-center'>
                                <div className='play-button'><FaPlay /></div>
                                <div className='play-text'>Play</div>
                                <div className='watchlist-button'>+</div>
                                <div className='details-button'><FaInfo /></div>
                            </div>
                        </div>
                        <div className="overlay"></div>
                    </>}
                    <img
                        className="d-block w-100 poster"
                        src="./images/The Marvelous Mrs. Maisel.jpg"
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Spotlight;