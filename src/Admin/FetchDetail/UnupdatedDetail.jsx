import { useEffect } from "react";
import "../../App.css";


function FetchUnupdated({setUnupdatedData}){

    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/backaakashmik/admin/fetchUnupdatedData`);
            const data = await response.json();
            setUnupdatedData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setUnupdatedData]); // Added setData in dependencies
      
   return null;

}


export default FetchUnupdated;