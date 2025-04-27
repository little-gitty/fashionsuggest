import React, { useState } from "react";

const WeatherSection = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if (!location.trim()) {
            setError("Please enter a location.");
            return;
        }
        setError("");
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=30f195e27c3e11b00fa6a6d6abdfe32c`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setWeather(data);
            } else {
                console.error("Error fetching weather:", data.message);
                setWeather(null);
                setError("Location not found. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
            setWeather(null);
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
            <button type="button" onClick={fetchWeather}>
                Get Weather
            </button>
            {error && <p className="error-message">{error}</p>}
            {weather && weather.main && weather.weather && (
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