import React from 'react';
import { Link } from 'react-router-dom';

const Headee = () => {
    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "center", height: "100px", alignItems: "center", backgroundColor: "gray" }}>
                <ul style={{ display: "flex", gap: "20px", }}>
                    <Link style={{ textDecoration: "none", fontSize: "20px" }} to="/">Home</Link>
                    <Link style={{ textDecoration: "none", fontSize: "20px" }} to="/About">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Headee;