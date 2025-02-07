import { useEffect } from "react";



function FetchData({setData}){


 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/backaakashmik/api/users');
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setData]); // Added setData in dependencies
      
   return null;

}


export default FetchData;