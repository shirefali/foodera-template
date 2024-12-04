import { PiShoppingCartFill } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';

const Landing = () => {
    return (
        <section className="landing" id="home">
            <div className="container" data-aos="fade-right">
                <div className="col-md-6 text">
                    <h1 className="fw-bold">
                        Good food choices are good investments.
                    </h1>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum amet leo.
                    </p>
                    <button className="text-white fw-bold py-2 px-4 me-4 fs-lg text-uppercase">
                        Order Now
                        <PiShoppingCartFill className="fs-4 ms-2" />
                    </button>
                    <button className="bg-white shadow fw-bold py-2 px-4 text-uppercase">
                        Learn More
                        <IoIosArrowForward className="fs-4 ms-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Landing;
