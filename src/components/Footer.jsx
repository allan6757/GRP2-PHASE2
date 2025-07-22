// components/Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./app.css"; // Optional for styling

function Footer() {
    return (
        <>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} SneakerStore. All rights reserved.</p>

                {/* Social Links */}
                <div className="social-icons">
                    <a
                        href="https://www.tiktok.com/@allxno.1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a
                        href="https://www.instagram.com/_.4allan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;