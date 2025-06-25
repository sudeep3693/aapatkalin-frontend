import { useEffect } from "react";



function FetchByData({setData,id, baseUrl}){

    useEffect(() => {
      
      const searchh = id;
        const fetchData = async () => {
          try {
            const response = await fetch(`${baseUrl}/backaakashmik/api/users/${searchh}`);
            const data = await response.json();
            console.log(data);
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