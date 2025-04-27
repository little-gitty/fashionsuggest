import React, { useState } from "react";
import "./SlidingPanel.css";

const SlidingPanel = ({ weatherContent, filesContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen((prevState) => !prevState); // Toggle the state
    };

    return (
        <div className="sliding-panel-container">
            <button className="toggle-button" onClick={togglePanel}>
                {isOpen ? "Close Panel" : "Open Panel"}
            </button>
            <div className={`sliding-panel ${isOpen ? "open" : ""}`}>
                <div className="panel-left">{weatherContent}</div>
                <div className="panel-right">{filesContent}</div>
            </div>
        </div>
    );
};

export default SlidingPanel;