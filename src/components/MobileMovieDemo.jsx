import React from 'react';
import { Link } from "react-router-dom"
import 'flickity/dist/flickity.min.css';
import FlickityComponent from 'react-flickity-component';

function MobileMoviesDemo(props) {
    const data = props.datas;

    const flickityOptions = {
        freeScroll: true,
    };
    return (
        <>
            <FlickityComponent
                key={data.length}
                className=''
                options={flickityOptions}
            >
                {data.map((movie, index) => {
                    return (
                        <Link to={`/content/${movie.title}`} state={{ movie }}>
                            <div key={movie.id} className={'swiper-slidex'}>
                                <img src={movie.spotlightImgPath}></img>
                            </div>
                        </Link>
                    );
                })}
            </FlickityComponent>
        </>
    );
}

export default MobileMoviesDemo;
