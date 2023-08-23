// AIzaSyDO63pNSmcrrLnkmn97gP9tLOq_92ndezU
import React ,{useState ,useEffect} from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import API_URL from '../config';

const countriesCoordinates = {
    "Spain": { lat: 40.4637, lng: -3.7492 },
    "Italy": { lat: 41.8719, lng: 12.5674 },
    "Greece": { lat: 39.0742, lng: 21.8243 },
    "Middle East": { lat: 30.3753, lng: 33.1560 },
    "Ireland": { lat: 53.1424, lng: -7.6921 },
    "Canada": { lat: 56.1304, lng: -106.3468 },
    "Australia": { lat: -25.2744, lng: 133.7751 },
    "United States": { lat: 37.0902, lng: -95.7129 },
    "Portugal": { lat: 39.3999, lng: -8.2245 },
    "Chile": { lat: -33.4569, lng: -70.6483 },
    "Denmark": { lat: 56.2639, lng: 9.5018 },
    "France": { lat: 46.6034, lng: 1.8883 },
    "Afghanistan": { lat: 33.9391, lng: 67.7100 },
    "Australia": { lat: -25.2744, lng: 133.7751 },
    "Netherlands": { lat: 52.1326, lng: 5.2913 },
    "Switzerland": { lat: 46.8182, lng: 8.2275 },
    "England": { lat: 51.509865, lng: -0.118092 },
    "Mexico": { lat: 23.6345, lng: -102.5528 },
    "Israel": { lat: 31.0461, lng: 34.8516 },
    "Azerbaijan": { lat: 40.1431, lng: 47.5769 },
    "New Zealand": { lat: -40.9006, lng: 174.8860 },
    "Scotland": { lat: 56.4907, lng: -4.2026 },
    "Croatia": { lat: 45.1000, lng: 15.2000 },
    "Cyprus": { lat: 35.1264, lng: 33.4299 },
    "Brazil": { lat: -14.235, lng: -51.9253 },
    "Finland": { lat: 61.9241, lng: 25.7482 },
    "Czech Republic": { lat: 49.8175, lng: 15.473 },
    "Bulgaria": { lat: 42.7339, lng: 25.4858 },
    "Russia": { lat: 61.5240, lng: 105.3188 },
    "Sweden": { lat: 60.1282, lng: 18.6435 },
    "Wale": { lat: 52.1307, lng: -3.7837 },
    "Mexico": { lat: 23.6345, lng: -102.5528 },
    "Caribbean": { lat: 12.1165, lng: -68.9301 },
    "Romania": { lat: 45.9432, lng: 24.9668 },
    "Isle of Man": { lat: 54.2361, lng: -4.5481 },
    "Argentina": { lat: -38.4161, lng: -63.6167 },

};


const MapCheese = () => {
    const [cheeses, setCheeses] = useState([]);
    const [selectedCheese, setSelectedCheese] = useState(null);

    useEffect(() => {
        // Fetch cheese data from your backend API
        fetch(`/api/cheeses/all`)
        .then((response) => response.json())
        .then((data) => {
            setCheeses(data);
        });
    }, []);

    const mapStyles = {
        height: '500px',
        width: '90%',
    };

// Center the map at a default location or any preferred location
    const defaultCenter = { lat: 0, lng: 0 };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDO63pNSmcrrLnkmn97gP9tLOq_92ndezU">

        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={2}>
                {Array.isArray(cheeses) && cheeses.length > 0 ? (
                    cheeses.map((cheese) => {
                        if (cheese.countries && countriesCoordinates[cheese.countries]) {
                            const { lat, lng } = countriesCoordinates[cheese.countries];
                            return (
                                <Marker
                                    key={cheese.id}
                                    position={{ lat, lng }}
                                    onClick={() => setSelectedCheese(cheese)}
                                >
                                {selectedCheese === cheese && (
                                        <InfoWindow onCloseClick={() => setSelectedCheese(null)}>
                                            <div>
                                                <a href={`/cheeses/${cheese.cheeseId}`}>
                                                    {cheese.name}
                                                </a>
                                            </div>
                                        </InfoWindow>
                                        )}
                                        </Marker>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <Marker position={defaultCenter} />
                            )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapCheese;