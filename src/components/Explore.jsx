import CustomCard from './CustomCard';
import vegSandwich from '../assets/01.jpg';
import burgerImg from '../assets/02.jpg';
import pizzaImg from '../assets/03.jpg';

const Explore = () => {
    return (
        <section className="explore" id="explore">
            <div className="container">
                <h4 className="fw-bold text-center" data-aos="fade-right">
                    Explore Our Foods
                </h4>
                <p className="text-center my-4" data-aos="fade-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                    Mauris feugiat erat tellus. Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                    Bookmarksgrove.
                </p>
                <div
                    className="row justify-content-between"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <CustomCard
                        image={vegSandwich}
                        altImg="vegetable-sandwich"
                        description="Rainbow Vegetable Sandwich"
                        time="15 - 20 Minutes | Serves: 1"
                        newPrice="$10.50"
                        oldPrice="$11.70"
                    />
                    <CustomCard
                        image={burgerImg}
                        altImg="burger-image"
                        description="Vegetarian Burger"
                        time="Time: 30 - 45 Minutes | Serves: 1"
                        newPrice="$9.20"
                        oldPrice="$10.50"
                    />
                    <CustomCard
                        image={pizzaImg}
                        altImg="pizza-image"
                        description="Raspberry Stuffed French Toast"
                        time="Time: 10 - 15 Minutes | Serves: 1"
                        newPrice="$12.50"
                        oldPrice="$13.20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Explore;
