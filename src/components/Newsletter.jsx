// components/Newsletter.jsx

import React, { useState } from "react";
import "./App.css";


function Newsletter() {
    // Form state
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    // Newsletter entries state
    const [newsletterList, setNewsletterList] = useState([]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0]; // "YYYY-MM-DD"

        const newEntry = {
            id: newsletterList.length + 1,
            user,
            message,
            created: formattedDate,
        };

        // Update list
        setNewsletterList([...newsletterList, newEntry]);

        // Clear form
        setUser("");
        setMessage("");
    };
    return (
        <>
            <div className="newsletter-container">
                <h2>Join Our Newsletter</h2>

                {/* Form to submit email and message */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Subscribe</button>
                </form>

                {/* Display list of submitted messages */}
                <div className="newsletter-list">
                    <h3>Newsletter Submissions:</h3>
                    {newsletterList.map((entry) => (
                        <div key={entry.id} className="newsletter-entry">
                            <p><strong>User:</strong> {entry.user}</p>
                            <p><strong>Message:</strong> {entry.message}</p>
                            <p><strong>Created:</strong> {entry.created}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Newsletter;
