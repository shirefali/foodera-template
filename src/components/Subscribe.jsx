import CustomButton from "./CustomButton";

const Subscribe = () => {
  return (
    <section className="subscribe py-5 overflow-hidden">
      <div className="container">
        <div className="row text-center">
          <h4 className="fs-1 fw-bold" data-aos="fade-left">
            Hurry up! Subscribe our newsletter and get 25% Off
          </h4>
          <p className="my-4" data-aos="fade-right" data-aos-delay="50">
            Limited time offer for this month. No credit card required.
          </p>
          <form className="mt-3" data-aos="fade-up" data-aos-delay="100">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Your Email"
              className="col-8 col-lg-6 me-0 me-lg-3 px-4 py-2"
            />
            <button type="button" className="px-4 py-2 fw-bold col-8 col-lg-3">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
