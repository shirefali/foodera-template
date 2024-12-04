import CustomStats from './CustomStats';

const Stats = () => {
    return (
        <section className="stats">
            <div className="container">
                <div className="row text-white fw-bold text-uppercase text-center row-gap-5">
                    <div className="col-md-3">
                        <CustomStats
                            target={1287}
                            duration={1000}
                            data-aos="fade-up"
                        />
                        <span>savings</span>
                    </div>
                    <div className="col-md-3">
                        <CustomStats target={5786} duration={1000} />
                        <span>Photos</span>
                    </div>
                    <div className="col-md-3">
                        <CustomStats target={1440} duration={1000} />
                        <span>Rockets</span>
                    </div>
                    <div className="col-md-3">
                        <CustomStats target={7110} duration={1000} />
                        <span>Globes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
