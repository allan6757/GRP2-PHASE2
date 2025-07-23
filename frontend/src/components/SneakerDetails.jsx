import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css"; // Assuming you have App.css for styling
import { useCart } from "../context/CartContext";

const API_BASE_URL = "http://localhost:3000/product"; // Ensure this matches your json-server URL

function SneakerDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [sneaker, setSneaker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NEW STATES FOR EDIT FUNCTIONALITY
  const [isEditing, setIsEditing] = useState(false);
  const [editedStock, setEditedStock] = useState('');
  const [updateStatus, setUpdateStatus] = useState(''); // For user feedback after update

  useEffect(() => {
    const fetchSneaker = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSneaker(data);
        setEditedStock(data.Stock); // Initialize editedStock with the fetched stock
      } catch (err) {
        console.error("Failed to fetch sneaker details:", err);
        setError("Failed to load sneaker details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSneaker();
  }, [id]); // Re-run if ID changes

  // Handlers for edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // When entering edit mode, ensure editedStock reflects current sneaker stock
    if (!isEditing && sneaker) {
      setEditedStock(sneaker.Stock);
    }
    setUpdateStatus(''); // Clear previous status messages
  };

  const handleStockChange = (e) => {
    setEditedStock(e.target.value);
  };

  const handleSaveChanges = async () => {
    const stockValue = parseInt(editedStock, 10); // Parse to integer, base 10
    
    // Basic validation
    if (isNaN(stockValue) || stockValue < 0) {
      setUpdateStatus("Stock must be a non-negative number.");
      return;
    }

    setUpdateStatus("Saving changes...");
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PATCH', // This is the PATCH request!
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Stock: stockValue }), // Only send the 'Stock' field
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update sneaker: ${response.status} - ${errorText}`);
      }

      const updatedSneaker = await response.json();
      setSneaker(updatedSneaker); // Update local state with the backend's response (important!)
      setIsEditing(false); // Exit edit mode
      setUpdateStatus("Sneaker stock updated successfully!");
    } catch (err) {
      console.error("Error saving changes:", err);
      setUpdateStatus(`Error saving changes: ${err.message}`);
      // Revert editedStock to original if save failed to prevent confusion
      setEditedStock(sneaker.Stock);
    }
  };

  if (loading) {
    return <div className="sneaker-details-container">Loading details...</div>;
  }

  if (error) {
    return <div className="sneaker-details-container error-message">{error}</div>;
  }

  if (!sneaker) {
    return <div className="sneaker-details-container">Sneaker not found.</div>;
  }

  return (
    <div className="sneaker-details-container">
      <div className="detail-image-box">
        <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
      </div>
      <div className="detail-content">
        <h2>{sneaker.name}</h2>
        <p className="detail-price">Price: KES {sneaker.Price}</p>

        {/* Display Stock (and edit mode for it) */}
        {isEditing ? (
          <div className="edit-stock-section">
            <label htmlFor="stock-input">Stock:</label>
            <input
              id="stock-input"
              type="number"
              value={editedStock}
              onChange={handleStockChange}
              min="0"
              className="stock-input-field"
            />
            <button onClick={handleSaveChanges} className="save-changes-button">Save Changes</button>
            <button onClick={handleEditToggle} className="cancel-button">Cancel</button>
          </div>
        ) : (
          <p className="detail-stock">Stock: {sneaker.Stock}</p>
        )}

        {/* Status message for update */}
        {updateStatus && (
          <p className={`update-status ${updateStatus.includes('successfully') ? 'success' : 'error'}`}>
            {updateStatus}
          </p>
        )}

        <button onClick={() => addToCart(sneaker)} className="add-to-cart-button">
          Add to Cart
        </button>
        <button onClick={handleEditToggle} className="edit-button">
            {isEditing ? 'Exit Edit Mode' : 'Edit Stock'}
        </button>
      </div>
    </div>
  );
}

export default SneakerDetails;