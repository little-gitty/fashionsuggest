import React, { useState } from "react";

const SlidingPanel = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sliding-panel ${isOpen ? "open" : ""}`}>
            <button type="button" className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Open"}
            </button>
            {isOpen && <div className="panel-content">{children}</div>}
        </div>
    );
};

export default SlidingPanel;