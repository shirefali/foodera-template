import infoImg1 from '../assets/1.webp';
import CustomButton from './CustomButton';

const Info = () => {
    return (
        <section className="info" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="img-1-cont col-lg-6">
                        <img
                            src={infoImg1}
                            alt="info-image-1"
                            className="rounded"
                            loading="lazy"
                            data-aos="fade-right"
                        />
                    </div>
                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <h3 className="fw-bold">
                            We pride ourselves on making real food from the best
                            ingredients.
                        </h3>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.
                        </p>
                        <CustomButton content="Learn More" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
