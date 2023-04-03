import React from 'react';
import Flickity from 'flickity';
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
                className='mt-2'
                options={flickityOptions}
            >
                {data.map((movie, index) => {
                    const leftPosition = index * 110 + '%';
                    return (
                        <div key={movie.id} className={'swiper-slidex'}>
                            <img src={movie.spotlightImgPath}></img>
                        </div>
                    );
                })}
            </FlickityComponent>
        </>
    );
}

export default MobileMoviesDemo;
