import { useEffect } from "react";
import "../../App.css";


function FetchUnupdated({setUnupdatedData, baseUrl}){

  
    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await fetch(`${baseUrl}/backaakashmik/admin/fetchUnupdatedData`);
            const data = await response.json();
            
            setUnupdatedData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setUnupdatedData, baseUrl]); // Added setData in dependencies
      
   return null;

}


export default FetchUnupdated;