import { useState, useEffect } from "react"
import DesktopMovies from './DesktopMovies';
import MobileMovies from './MobileMovies';



function Movies(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [recommendedTv, setRecommendedTv] = useState([]);

    const data = props.datas;
    const tvSeries = data.filter(item => item.type === 'TV series');
    const awardWinners = data.filter(item => item.award === true);
    
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 992);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const randomFive = [];
        while (randomFive.length < 10) {
            const randomIndex = Math.floor(Math.random() * tvSeries.length);
            if (!randomFive.includes(tvSeries[randomIndex])) {
                randomFive.push(tvSeries[randomIndex]);
            }
        }
        setRecommendedTv(randomFive)
    }, [])

    function getRecommended() {
        return (
            <div className="recommended">
                <div className='text-container mt-3 recommend'>
                    <span className='movies-text prime-text'>
                        Prime
                    </span> &nbsp;&nbsp;
                    <span className='movies-text title-text'>
                        Recommended TV
                    </span>
                </div>

                {isMobile ? <MobileMovies datas={recommendedTv} /> : <DesktopMovies datas={recommendedTv} />}
            </div>
        )
    }

    function getAwardWinners(){
        return (
            <div className="award-winners mb-5">
                <div className='text-container mt-3'>
                    <span className='movies-text prime-text'>
                        Prime
                    </span> &nbsp;&nbsp;
                    <span className='movies-text title-text'>
                        Award-Winning TV Series
                    </span>
                </div>

                {isMobile ? <MobileMovies datas={awardWinners} /> : <DesktopMovies datas={awardWinners} />}
            </div>
        )
    }



    return (
        <>
            {getRecommended()}
            {getAwardWinners()}
        </>
    );
}

export default Movies;
