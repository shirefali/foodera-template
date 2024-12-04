import { FaPlay } from 'react-icons/fa6';

const OurStory = () => {
    return (
        <section className="our-story my-5">
            <div className="container text-center position-relative">
                <h3 className="fw-bold">
                    When a man's stomach is full it makes no <br /> difference
                    whether he is rich or poor.
                </h3>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus <br /> bibendum in sit amet
                    leo. Mauris feugiat erat tellus.
                </p>
                <div className="story-watch">
                    <a href="#">
                        <FaPlay className="play-icon me-2" />
                        Watch Our Story
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
