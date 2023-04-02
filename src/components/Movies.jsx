import { data } from '../data';
import { useState, useEffect } from "react"
import DesktopMovies from './DesktopMovies';
import MobileMovies from './MobileMovies';


function MyCarousel() {
    const [isMobile, setIsMobile] = useState(false);
    const datas = data.map(item => item)
    console.log(datas);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className='text-container mt-4'>
                <span className='movies-text prime-text'>
                    Prime
                </span> &nbsp;&nbsp;
                <span className='movies-text title-text'>
                    Recommended Movies
                </span>
            </div>

            {isMobile ? <MobileMovies /> : <DesktopMovies />}
        </>);
}

export default MyCarousel;
