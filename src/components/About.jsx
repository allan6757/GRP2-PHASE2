// src/About.jsx
import React from "react";
import "../App.css"; // Assuming you want to use the main App.css for styling

function About() {
    return (
        <div className="about-page-container">
            <h1 className="about-title">About SneakerStore</h1>
            <p className="about-paragraph">
                Welcome to SneakerStore, your ultimate destination for the latest and greatest in sneaker fashion!
                We are passionate about sneakers and committed to bringing you a curated selection of high-quality,
                authentic footwear from top brands around the world.
            </p>
            <p className="about-paragraph">
                Our mission is to provide sneaker enthusiasts with an unparalleled shopping experience,
                offering a wide range of styles, sizes, and exclusive releases. Whether you're a seasoned collector
                or just starting your sneaker journey, we've got something for everyone.
            </p>
            <h2 className="about-subtitle">Our Vision</h2>
            <p className="about-paragraph">
                To be the leading online retailer for sneakers, recognized for our exceptional customer service,
                diverse product range, and commitment to the sneaker community. We believe that sneakers are more
                than just shoes – they're a form of self-expression and culture.
            </p>
            <h2 className="about-subtitle">What We Offer</h2>
            <ul className="about-list"> {/* Added ul wrapper */}
                <li className="about-list-item">A vast collection of authentic sneakers from popular and emerging brands.</li>
                <li className="about-list-item">Exclusive releases and limited-edition drops.</li>
                <li className="about-list-item">Secure and seamless online shopping experience.</li>
                <li className="about-list-item">Fast and reliable shipping.</li>
                <li className="about-list-item">Dedicated customer support ready to assist you.</li>
            </ul>
            <p className="about-paragraph">
                Thank you for choosing SneakerStore. We look forward to helping you find your next favorite pair!
            </p>
        </div>
    );
}

export default About;