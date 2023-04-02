import { useState, useEffect } from "react"
import DesktopMovies from './DesktopMovies';
import MobileMovies from './MobileMovies';
import { recommendTv } from "../helper";


function Movies(props) {
    const [isMobile, setIsMobile] = useState(false);

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
                    Recommended TV
                </span>
            </div>

            {isMobile ? <MobileMovies datas={props.datas} /> : <DesktopMovies datas={props.datas} />}
        </>
    );
}

export default Movies;
