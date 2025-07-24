import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const API_BASE_URL = "https://grp2-phase2.onrender.com/product";

function AddSneaker() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    Price: "",
    Stock: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add sneaker");
        return res.json();
      })
      .then(() => {
        alert("Sneaker added!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding sneaker.");
      });
  };

  return (
    <div className="form-container">
      <h2>Add New Sneaker</h2>
      <form onSubmit={handleSubmit} className="sneaker-form">
        <input type="text" name="name" placeholder="Sneaker Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input type="number" name="Price" placeholder="Price (KES)" value={formData.Price} onChange={handleChange} required />
        <input type="number" name="Stock" placeholder="Stock" value={formData.Stock} onChange={handleChange} required />
        <button type="submit">Add Sneaker</button>
      </form>
    </div>
  );
}

export default AddSneaker;