import React, { useState, useEffect } from "react";

function LocationComponent({longitudee, latitudee}) {

  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
useEffect(()=>{
    longitudee(location.longitude);
    latitudee(location.latitude);
},[location,longitudee,latitudee])


  return null;
  
}

export default LocationComponent;
