import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = goToNextSlide;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };

        const interval = setInterval(play, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };

    return (
        <div className='relative flex items-center justify-center w-full overflow-hidden'>
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {child}
                </div>
            ))}
            <button onClick={goToPrevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>child
            </button>
            <button onClick={goToNextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};
Carousel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Carousel;