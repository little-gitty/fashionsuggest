import React, { useState } from "react";

const WeatherSection = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        if (!location) return;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <div className="weather-section">
            <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="button" onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div className="weather-info">
                    <h3>{weather.name}</h3>
                    <p>{Math.round(weather.main.temp - 273.15)}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherSection;