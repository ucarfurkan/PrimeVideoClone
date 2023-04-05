import { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function DesktopMovies(props) {
  const data = props.datas;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  const slides = data.reduce((resultArray, item, index) => {
    const slideIndex = Math.floor(index / itemsPerSlide);

    if (!resultArray[slideIndex]) {
      resultArray[slideIndex] = [];
    }

    resultArray[slideIndex].push(item);

    return resultArray;
  }, []);

  const handleSlide = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={null}
      className="movie-carousel"
      controls={slides.length > 1}
      activeIndex={currentIndex}
      onSelect={handleSlide}
      wrap={false}
    >
      {slides.map((slideMovies, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <Row className="justify-content-center movie-row">
            {slideMovies.map((movie, movieIndex) => (
              <Col md={2} key={slideIndex * itemsPerSlide + movieIndex} className="movie-col">
                <Link to={`/content/${movie.title}`} state={{ movie }}>
                  <img src={movie.spotlightImgPath} alt={`Image ${slideIndex * itemsPerSlide + movieIndex + 1}`} />
                </Link>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DesktopMovies;
