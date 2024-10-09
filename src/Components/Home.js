// src/Components/Home.js
import React from 'react';
import Carousel from './Carousel';
import './Home.css';

const events = [
    { title: 'Event 1', date: '2024-10-15', description: 'Description of Event 1' },
    { title: 'Event 2', date: '2024-10-22', description: 'Description of Event 2' },
    { title: 'Event 3', date: '2024-10-29', description: 'Description of Event 3' },
];

const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome to the Alumni Interface</h2>
            <h3>Upcoming Events</h3>
            <Carousel events={events} />
        </div>
    );
};

export default Home;
