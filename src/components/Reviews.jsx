import { Carousel } from 'react-bootstrap';
import aliImg from '../assets/1 model.webp';
import saberImg from '../assets/2 model.jpg';
import johnImg from '../assets/3 model.jpg';

const Reviews = () => {
    return (
        <section className="carousel-sec pt-5" id="reviews">
            <h2 className="fw-bold text-center text-white">Testimonials</h2>
            <Carousel interval={null} className="text-center py-3">
                <Carousel.Item>
                    <img src={aliImg} alt="ali's-image" />
                    <Carousel.Caption>
                        <h3>Frontend Developer</h3>
                        <p>
                            “Your old site is the best prototype of your new
                            site.”
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={saberImg} alt="saber's-image" loading="lazy" />
                    <Carousel.Caption>
                        <h3>UI / UX Designer</h3>
                        <p>“Inspiration Boosters for Creative Minds.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={johnImg} alt="john's-image" loading="lazy" />
                    <Carousel.Caption>
                        <h3>Backend Developer</h3>
                        <p>
                            “The best error message is the one that never shows
                            up.”
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Reviews;
