import { useEffect } from "react";



function FetchByData({setData,id}){

    useEffect(() => {
      const searchh = id;
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/backaakashmik/api/users/${searchh}`);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("error", error);
          }
        };
        fetchData();
      }, [setData,id]); // Added setData in dependencies
      
   return null;

}


export default FetchByData;