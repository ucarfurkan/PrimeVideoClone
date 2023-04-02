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

    return (isMobile ? <MobileMovies /> : <DesktopMovies/>);
}

export default MyCarousel;
