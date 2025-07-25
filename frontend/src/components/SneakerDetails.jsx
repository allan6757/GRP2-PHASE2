import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css"; 
import { useCart } from "../context/CartContext";


const API_BASE_URL = "https://grp2-phase2.onrender.com/product"; 

function SneakerDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { addToCart } = useCart();

  const [sneaker, setSneaker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States for EDIT functionality
  const [isEditing, setIsEditing] = useState(false);
  const [editedStock, setEditedStock] = useState('');
  const [updateStatus, setUpdateStatus] = useState(''); // For user feedback after update/delete

  // NEW STATE for DELETE confirmation modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const fetchSneaker = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
          // If sneaker not found (e.g., deleted by another user), navigate away
          if (response.status === 404) {
              setError("Sneaker not found.");
              // Optionally, navigate to items page after a delay
              setTimeout(() => navigate('/items'), 2000);
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSneaker(data);
        setEditedStock(data.Stock); // Initialize editedStock with the fetched stock
      } catch (err) {
        console.error("Failed to fetch sneaker details:", err);
        // Only set general error if not already handled by 404
        if (!error) { 
            setError("Failed to load sneaker details. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSneaker();
  }, [id, navigate, error]); // Re-run if ID changes, or if navigation/error state changes

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

  // NEW: Handler to show confirmation modal
  const handleDeleteClick = () => {
    setShowConfirmModal(true);
    setUpdateStatus(''); // Clear any previous status
  };

  // NEW: Handler to confirm and execute delete
  const confirmDelete = async () => {
    setShowConfirmModal(false); // Hide the modal
    setUpdateStatus("Deleting sneaker...");
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE', // This is the DELETE request!
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete sneaker: ${response.status} - ${errorText}`);
      }

      // If deletion is successful, navigate to the items page
      setUpdateStatus("Sneaker deleted successfully! Redirecting...");
      setTimeout(() => {
        navigate('/items'); // Redirect to the items list
      }, 1500); // Give user a moment to see the success message
      
    } catch (err) {
      console.error("Error deleting sneaker:", err);
      setUpdateStatus(`Error deleting sneaker: ${err.message}`);
    }
  };

  // NEW: Handler to cancel delete
  const cancelDelete = () => {
    setShowConfirmModal(false); // Hide the modal
    setUpdateStatus(''); // Clear status
  };


  if (loading) {
    return (
        <section className="details-section">
            <div className="max-width-wrapper">
                <p>Loading details...</p>
            </div>
        </section>
    );
  }

  if (error) {
    return (
        <section className="details-section">
            <div className="max-width-wrapper">
                <p className="error-message">{error}</p>
            </div>
        </section>
    );
  }

  if (!sneaker) {
    return (
        <section className="details-section">
            <div className="max-width-wrapper">
                <p>Sneaker not found.</p>
            </div>
        </section>
    );
  }

  return (
    <section className="details-section">
      <div className="max-width-wrapper">
        <div className="details-content">
            <button onClick={() => navigate('/items')} className="back-button"> 
                Back to Sneakers
            </button>
            <div className="sneaker-detail-card">
                <div className="detail-image-box">
                    <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
                </div>
                <div className="detail-info">
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

                    {/* Status message for update/delete */}
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
                    {/* NEW: Delete Button */}
                    <button onClick={handleDeleteClick} className="delete-button">
                        Delete Sneaker
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* NEW: Confirmation Modal */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete "{sneaker.name}"?</p>
            <div className="modal-actions">
              <button onClick={confirmDelete} className="confirm-delete-button">Yes, Delete</button>
              <button onClick={cancelDelete} className="cancel-button">No, Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SneakerDetails;
