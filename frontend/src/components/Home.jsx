// components/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const sneakerImages = [
  "https://i.pinimg.com/736x/0c/be/2c/0cbe2c0a6167086fecdf99a62b898e97.jpg",
  "https://i.pinimg.com/1200x/cb/62/f2/cb62f26932b4958069f2b09fb48125d1.jpg",
  "https://i.pinimg.com/736x/8d/bb/1b/8dbb1b50342f5a3914f262d5e41f6243.jpg",
  "https://i.pinimg.com/736x/69/2b/0d/692b0d7acff70f764216fc7a2fc5f19f.jpg"
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sneakerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    navigate("/items");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Sneaker Store</h1>
      <p>Ready for your next adventure? The Sneaker Store has the perfect sneakers to keep up with your active lifestyle. From rugged trail runners to sleek urban kicks, explore our collection and start your journey.</p>
      <div className="slideshow" onClick={handleImageClick} style={{ cursor: "pointer" }}>
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