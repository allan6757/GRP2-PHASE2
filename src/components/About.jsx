// src/About.jsx
import React from "react";
import "../App.css"; // Assuming you want to use the main App.css for styling

function About() {
    return (
        <div className="about-page-container">
            <h1 className="about-title">About SneakerStore</h1>
            <p className="about-paragraph">
                Welcome to SneakerStore — where the streets meet style, and every step tells a story. We're more than just a shop;
                we're a hub for sneaker explorers, trendsetters, and collectors chasing that next iconic pair. From bold takes
                on classic silhouettes to rare kicks with stories stitched into every seam, our collection is your passport to
                the culture of cool. Whether you're repping high-flying Jordans, reimagined Adidas legends, or timeless Converse heat,
                every name has its own journey — and now, so do you.
            </p>
            <p className="about-paragraph">
                We're here to elevate your sneaker game — no matter where you're starting from.
                With a handpicked mix of standout styles, exclusive drops, and sizes that fit real life,
                SneakerStore makes every pickup feel personal. From your first pair to your fiftieth,
                this is where the journey stays fresh.
            </p>
            <h2 className="about-subtitle">Our Vision</h2>
            <p className="about-paragraph">
                We’re chasing more than sales — we’re chasing legacy. SneakerStore aims to be the heartbeat of
                sneaker culture, known for killer kicks, real service, and a deep respect for the community.
                Because sneakers speak — and we listen.
            </p>
            <h2 className="about-subtitle">What We Offer</h2>
            <ul className="about-list"> {/*added ul wrapper*/}
                <li className="about-list-item">A fire collection of kicks — from OG classics to new-wave legends.</li>
                <li className="about-list-item">Exclusive drops and rare pairs you’ll flex, not just wear.</li>
                <li className="about-list-item">Safe, easy checkout that’s smoother than a clean lace swap.</li>
                <li className="about-list-item">Quick, reliable delivery so you can step fresh without delay.</li>
                <li className="about-list-item">Real support from sneakerheads who speak your language.</li>
            </ul>
            <p className="about-paragraph">
                Thank you for choosing SneakerStore. We look forward to helping you find your next favorite pair!
            </p>
        </div>
    );
}

export default About;