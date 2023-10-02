import React, { useState, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    LoadScript,
} from "@react-google-maps/api";
import API_URL from "../config";

const countriesCoordinates = {
    Spain: { lat: 40.4637, lng: -3.7492 },
    Italy: { lat: 41.8719, lng: 12.5674 },
    Greece: { lat: 39.0742, lng: 21.8243 },
    "Middle East": { lat: 30.3753, lng: 33.156 },
    Ireland: { lat: 53.1424, lng: -7.6921 },
    Canada: { lat: 56.1304, lng: -106.3468 },
    "United States": { lat: 37.0902, lng: -95.7129 },
    Portugal: { lat: 39.3999, lng: -8.2245 },
    Chile: { lat: -33.4569, lng: -70.6483 },
    Denmark: { lat: 56.2639, lng: 9.5018 },
    France: { lat: 46.6034, lng: 1.8883 },
    Afghanistan: { lat: 33.9391, lng: 67.71 },
    Australia: { lat: -25.2744, lng: 133.7751 },
    Netherlands: { lat: 52.1326, lng: 5.2913 },
    Switzerland: { lat: 46.8182, lng: 8.2275 },
    England: { lat: 51.509865, lng: -0.118092 },
    Israel: { lat: 31.0461, lng: 34.8516 },
    Azerbaijan: { lat: 40.1431, lng: 47.5769 },
    "New Zealand": { lat: -40.9006, lng: 174.886 },
    Scotland: { lat: 56.4907, lng: -4.2026 },
    Croatia: { lat: 45.1, lng: 15.2 },
    Cyprus: { lat: 35.1264, lng: 33.4299 },
    Brazil: { lat: -14.235, lng: -51.9253 },
    Finland: { lat: 61.9241, lng: 25.7482 },
    "Czech Republic": { lat: 49.8175, lng: 15.473 },
    Bulgaria: { lat: 42.7339, lng: 25.4858 },
    Russia: { lat: 61.524, lng: 105.3188 },
    Sweden: { lat: 60.1282, lng: 18.6435 },
    Wale: { lat: 52.1307, lng: -3.7837 },
    Mexico: { lat: 23.6345, lng: -102.5528 },
    Caribbean: { lat: 12.1165, lng: -68.9301 },
    Romania: { lat: 45.9432, lng: 24.9668 },
    "Isle of Man": { lat: 54.2361, lng: -4.5481 },
    Argentina: { lat: -38.4161, lng: -63.6167 },
    Austria: { lat: 47.5162, lng: 14.5501 },
    "Great Britain": { lat: 51.5074, lng: -0.1278 },
    China: { lat: 35.8617, lng: 104.1954 },
    Nepal: { lat: 28.3949, lng: 84.124 },
    Japan: { lat: 36.2048, lng: 138.2529 },
};
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const MapCheese = () => {
    const [cheeses, setCheeses] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        // Fetch cheese data from your backend API
        fetch(`${API_URL}/api/cheeses/all`)
            .then((response) => response.json())
            .then((data) => {
                setCheeses(data);
            });
    }, []);

    const groupedCheeses = {};

    // Group cheeses by coordinates
    cheeses.forEach((cheese) => {
        if (cheese.countries && countriesCoordinates[cheese.countries]) {
            const { lat, lng } = countriesCoordinates[cheese.countries];
            const locationKey = `${lat}-${lng}`;
            if (!groupedCheeses[locationKey]) {
                groupedCheeses[locationKey] = [];
            }
            groupedCheeses[locationKey].push(cheese);
        }
    });

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "600px" }}
                center={{ lat: 0, lng: 0 }}
                zoom={2}
            >
                {Object.keys(groupedCheeses).map((locationKey) => {
                    const [lat, lng] = locationKey.split("-").map(parseFloat);
                    return (
                        <Marker
                            key={locationKey}
                            position={{ lat, lng }}
                            onClick={() => setSelectedMarker(locationKey)}
                        >
                            {selectedMarker === locationKey && (
                                <InfoWindow
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div>
                                        {groupedCheeses[locationKey].map(
                                            (cheese) => (
                                                <div key={cheese.id}>
                                                    <a
                                                        href={`/cheeses/${cheese.cheeseId}`}
                                                        style={{
                                                            position:
                                                                "relative",
                                                            top: "-3px",
                                                        }}
                                                    >
                                                        {cheese.name}
                                                    </a>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    );
                })}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapCheese;
