import infoImg2 from '../assets/2.webp';
import { PiCheckFatFill } from 'react-icons/pi';
import CustomButton from './CustomButton';

const SecondInfo = () => {
    const lisArr = [
        {
            id: 1,
            text: 'Etiam sed dolor ac diam volutpat.',
        },
        { id: 2, text: 'Erat volutpat aliquet imperdiet.' },
        { id: 3, text: 'purus a odio finibus bibendum.' },
    ];
    return (
        <section className="second-info overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="text col-lg-6" data-aos="slide-up">
                        <h3 className="fw-bold">
                            We make everything by hand with the best possible
                            ingredients.
                        </h3>
                        <p className="my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.Far far away,
                            behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <ul>
                            {lisArr.map((li) => {
                                return (
                                    <li className="mb-2" key={li.id}>
                                        <PiCheckFatFill className="check-icon" />{' '}
                                        {li.text}
                                    </li>
                                );
                            })}
                        </ul>
                        <CustomButton content="learn more" />
                    </div>
                    <div className="col-lg-6">
                        <img
                            src={infoImg2}
                            alt="info-img-2"
                            loading="lazy"
                            data-aos="slide-down"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondInfo;
