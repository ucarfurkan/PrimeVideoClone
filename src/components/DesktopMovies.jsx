import { useState } from "react"
import { data } from '../data';
import { Carousel, Row, Col } from 'react-bootstrap';

function DesktopMovies() {
    const images = data.map(item => item.spotlightImgPath);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(5); // new state variable



    const items = images.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerSlide); // use state value

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    const handleSlide = (selectedIndex) => {
        setCurrentIndex(selectedIndex);
    };

    return (
        <Carousel
            interval={null}
            className="movie-carousel"
            controls={items.length > 1}
            activeIndex={currentIndex}
            onSelect={handleSlide}
        >
            {items.map((group, index) => (
                <Carousel.Item key={index}>
                    <Row className="justify-content-center movie-row">
                        {group.map((image, index) => (
                            <Col md={2} key={index} className="movie-col">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
            <style type="text/css">
                {`.movie-carousel .carousel-control-prev {
                display: ${currentIndex === 0 ? "none" : ""};
              }
              .movie-carousel .carousel-control-next {
                display: ${currentIndex === items.length - 1 ? "none" : ""
                    };
              }`}
            </style>
        </Carousel>
    )
}

export default DesktopMovies;