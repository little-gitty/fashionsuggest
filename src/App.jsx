import React from "react";
import WeatherSection from "./components/WeatherSection";
import ImageUploadSection from "./components/ImageUploadSection";
import ChatSection from "./components/ChatSection";
import SlidingPanel from "./components/SlidingPanel";
import "./styles.css";

const App = () => {
    return (
        <div className="app-container">
            <WeatherSection />
            <SlidingPanel>
                <ImageUploadSection />
            </SlidingPanel>
            <ChatSection />
        </div>
    );
};

export default App;