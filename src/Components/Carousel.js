// src/Components/Carousel.js
import React, { useState } from 'react';
import './Carousel.css'; // Ensure this path is correct

const Carousel = ({ events }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <button onClick={goToPrevious} className="carousel-control prev">
                &#10094; {/* Left arrow */}
            </button>
            <div className="carousel-content">
                {events.map((event, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        style={{
                            display: index === currentIndex ? 'block' : 'none', // Show only the current item
                        }}
                    >
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={goToNext} className="carousel-control next">
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default Carousel;
