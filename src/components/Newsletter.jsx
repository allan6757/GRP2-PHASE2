import React, { useState } from "react";
const API_BASE_URL = "http://localhost:3000/Newsletter";
import '../App.css'

// Newsletter component handles user subscriptions/messages
function Newsletter() {
    // State variables for form inputs
    const [user, setUser] = useState(""); // Stores email address
    const [message, setMessage] = useState(""); // Stores user message
    const [status, setStatus] = useState(""); // Feedback status after submission

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        // Construct the object to POST to the server
        const newEntry = {
            user,
            message,
            created: new Date().toISOString() // Auto-generate timestamp
        };

        try {
            // Send POST request to json-server
            const response = await fetch("http://localhost:3000/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            });

            // If request is successful
            if (response.ok) {
                // Update status message and reset form fields
                setStatus(`Created at: ${new Date().toLocaleString()}`);
                setUser("");
                setMessage("");
            } else {
                // Handle non-200 responses
                setStatus(" Failed to submit.");
            }
        } catch (error) {
            // Handle network or server errors
            console.error("Error:", error);
            setStatus("Server error.");
        }
    };
    return (
        <>
            <div className="newsletter">
                <h2>Subscribe to our Newsletter</h2>

                {/* Newsletter submission form */}
                <form onSubmit={handleSubmit}>
                    {/* Email input field */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />

                    {/* Message textarea */}
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    {/* Submit button */}
                    <button type="submit">Submit</button>
                </form>

                {/* Display status message after submission */}
                {status && <p>{status}</p>}
            </div>
        </>
    );
}

export default Newsletter;