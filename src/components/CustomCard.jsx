import CustomButton from './CustomButton';

const CustomCard = ({
    image,
    altImg,
    description,
    time,
    newPrice,
    oldPrice,
}) => {
    return (
        <main className="custom-card text-center col-md-6 col-lg-4 my-4">
            <img src={image} alt={altImg} className="rounded" loading="lazy" />
            <h4 className="my-3 fw-bold">{description}</h4>
            <p>Time: {time}</p>
            <span className="new-price fw-bold">{newPrice}</span>
            <span className="old-price fw-bold ms-3">{oldPrice}</span>
            <hr />
            <CustomButton content="order now" />
        </main>
    );
};

export default CustomCard;
