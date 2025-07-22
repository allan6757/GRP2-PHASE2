import React, { useState, useEffect } from "react";
import '..App.css';

// Sample sneaker images for the slideshow
const sneakerImages = [
  "https://example.com/sneaker1.jpg",
  "https://example.com/sneaker2.jpg",
  "https://example.com/sneaker3.jpg",
  "https://example.com/sneaker4.jpg",
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sneakerImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Sneaker Store</h1>
      <div className="slideshow">
        <img
          src={sneakerImages[currentSlide]}
          alt="Sneaker"
          className="sneaker-image"
        />
      </div>

    
    </div>
  );
}

export default Home;
