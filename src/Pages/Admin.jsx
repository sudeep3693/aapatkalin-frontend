
import FetchUnupdated from "../Admin/FetchDetail/UnupdatedDetail";
import UnupdatedRecordTable from "../Admin/Comps/AdminDetailTable";
import { useState } from "react";
import "../App.css";
import AdminNavBar from "../Admin/Comps/AdminNavBar";
function Admin(){

      const Base_Url = "http://localhost:8080";
    //const Base_Url = "https://5e68-27-34-72-167.ngrok-free.app";

    const [unupdatedData,setUnupdatedData] = useState([]);
    return(
<div>
<AdminNavBar/>
<FetchUnupdated setUnupdatedData={setUnupdatedData} baseUrl={Base_Url}/>

    <UnupdatedRecordTable data={unupdatedData}/>
</div>

    )

}
export default Admin;