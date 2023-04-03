import { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

function DesktopMovies(props) {
  const data = props.datas;
  const images = data.map((item) => item.spotlightImgPath);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  const items = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerSlide);

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
      wrap={false}
    >
      {[...Array(Math.ceil(images.length / itemsPerSlide))].map(
        (group, groupIndex) => {
          const start = groupIndex * itemsPerSlide;
          const end = start + itemsPerSlide;
          const groupItems = images.slice(start, end);
          return (
            <Carousel.Item key={groupIndex}>
              <Row className="justify-content-center movie-row">
                {groupItems.map((image, index) => (
                  <Col md={2} key={start + index} className="movie-col">
                    <img src={image} alt={`Image ${start + index + 1}`} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          );
        }
      )}
    </Carousel>
  );
}

export default DesktopMovies;
