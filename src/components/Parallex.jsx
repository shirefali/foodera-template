import CustomButton from './CustomButton';

const Parallex = () => {
    return (
        <section className="parallex py-5">
            <div className="container position-relative text-center">
                <h3 className="fw-bold text-white">
                    Baked fresh daily by bakers with passion.
                </h3>
                <CustomButton content="learn more" />
            </div>
        </section>
    );
};

export default Parallex;
