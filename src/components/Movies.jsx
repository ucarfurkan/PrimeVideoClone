import { Carousel, Row, Col } from 'react-bootstrap';
import { data } from '../data';

function MyCarousel() {
    const images = data.map(item => item.spotlightImgPath);

    const items = images.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 5);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return (
        <Carousel interval={null} className='movie-carousel mt-5' controls={items.length > 1}>
            {items.map((group, index) => (
                <Carousel.Item key={index}>
                    <Row className='justify-content-center movie-row'>
                        {group.map((image, index) => (
                            <Col md={2} key={index} className='movie-col'>
                                <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;
