import React, { useState, useEffect } from 'react';

const CustomStats = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 30);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 50);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <h2>{count}+</h2>;
};

export default CustomStats;
