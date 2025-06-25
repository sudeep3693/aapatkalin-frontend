import { useEffect } from "react";



function FetchByLocation({setData,longitude,latitude, baseUrl}){


    useEffect(() => {
      const searchh = `${longitude}&&${latitude}`;
        const fetchData = async () => {
          try {
            const response = await fetch(`${baseUrl}/backaakashmik/api/users/location/${searchh}`);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setData,longitude,latitude]); // Added setData in dependencies
      
     
   return null;

}


export default FetchByLocation;