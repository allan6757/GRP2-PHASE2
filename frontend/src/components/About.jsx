// src/About.jsx
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "../App.css";

function About() {
    const [advice, setAdvice] = useState(''); // State to store the advice
    const [loadingAdvice, setLoadingAdvice] = useState(true); // Loading state
    const [adviceError, setAdviceError] = useState(null); // Error state

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                setLoadingAdvice(true);
                setAdviceError(null); // Clear previous errors
                const response = await fetch('https://api.adviceslip.com/advice');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setAdvice(data.slip.advice); // The advice is nested under 'slip.advice'
            } catch (error) {
                console.error("Failed to fetch advice:", error);
                setAdviceError("Failed to load daily advice. Please try again later.");
            } finally {
                setLoadingAdvice(false);
            }
        };

        fetchAdvice();
    }, []); // Empty dependency array means this runs once on component mount

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
            <ul className="about-list">
                <li className="about-list-item">A vast collection of authentic sneakers from popular and emerging brands.</li>
                <li className="about-list-item">Exclusive releases and limited-edition drops.</li>
                <li className="about-list-item">Secure and seamless online shopping experience.</li>
                <li className="about-list-item">Fast and reliable shipping.</li>
                <li className="about-list-item">Dedicated customer support ready to assist you.</li>
            </ul>
            <p className="about-paragraph">
                Thank you for choosing SneakerStore. We look forward to helping you find your next favorite pair!
            </p>

            {/* NEW SECTION: Daily Advice from External API */}
            <div className="advice-section">
                <h2 className="about-subtitle">Daily Wisdom</h2>
                {loadingAdvice ? (
                    <p className="loading-message">Loading daily advice...</p>
                ) : adviceError ? (
                    <p className="error-message">{adviceError}</p>
                ) : (
                    <p className="advice-text">"{advice}"</p>
                )}
            </div>
        </div>
    );
}

export default About;