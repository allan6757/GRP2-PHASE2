// src/About.jsx
import React from "react";
import "../App.css"; // Assuming you want to use the main App.css for styling

function About() {
    return (
        <div className="about-page-container p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About SneakerStore</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to SneakerStore, your ultimate destination for the latest and greatest in sneaker fashion!
                We are passionate about sneakers and committed to bringing you a curated selection of high-quality,
                authentic footwear from top brands around the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our mission is to provide sneaker enthusiasts with an unparalleled shopping experience,
                offering a wide range of styles, sizes, and exclusive releases. Whether you're a seasoned collector
                or just starting your sneaker journey, we've got something for everyone.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be the leading online retailer for sneakers, recognized for our exceptional customer service,
                diverse product range, and commitment to the sneaker community. We believe that sneakers are more
                than just shoes – they're a form of self-expression and culture.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">What We Offer</h2>
            
                <li>A vast collection of authentic sneakers from popular and emerging brands.</li>
                <li>Exclusive releases and limited-edition drops.</li>
                <li>Secure and seamless online shopping experience.</li>
                <li>Fast and reliable shipping.</li>
                <li>Dedicated customer support ready to assist you.</li>
            
            <p className="text-lg text-gray-700 leading-relaxed">
                Thank you for choosing SneakerStore. We look forward to helping you find your next favorite pair!
            </p>
        </div>
    );
}

export default About;
