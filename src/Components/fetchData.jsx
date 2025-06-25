import { useEffect } from "react";



function FetchData({setData, baseUrl}){


 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${baseUrl}/backaakashmik/api/users`);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setData,baseUrl]); // Added setData in dependencies
      
   return null;

}


export default FetchData;