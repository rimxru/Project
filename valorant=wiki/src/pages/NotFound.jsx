import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code">404</div>
        <div className="error-message">
          <h1>AGENT NOT FOUND</h1>
          <p>The page you're looking for has gone missing in action.</p>
          <p>Perhaps it was eliminated by the enemy team?</p>
        </div>
        
        <div className="notfound-actions">
          <Link to="/" className="btn-primary">
            <i className="fas fa-home"></i>
            Return to Home
          </Link>
          <Link to="/agents" className="btn-secondary">
            <i className="fas fa-users"></i>
            View Agents
          </Link>
        </div>
        
        <div className="notfound-decoration">
          <div className="crosshair">
            <div className="crosshair-line horizontal"></div>
            <div className="crosshair-line vertical"></div>
            <div className="crosshair-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;