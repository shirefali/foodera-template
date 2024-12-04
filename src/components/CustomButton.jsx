const CustomButton = ({ content, ...children }) => {
    return (
        <button
            type="button"
            className={`${children} custom-button py-2 px-4 fw-bold text-uppercase mt-4`}
        >
            {content}
        </button>
    );
};

export default CustomButton;
