
import FetchUnupdated from "../Admin/FetchDetail/UnupdatedDetail";
import UnupdatedRecordTable from "../Admin/Comps/AdminDetailTable";
import { useState } from "react";
import "../App.css";
import AdminNavBar from "../Admin/Comps/AdminNavBar";
function Admin(){

    const [unupdatedData,setUnupdatedData] = useState([]);
    return(
<div>
<AdminNavBar/>
<FetchUnupdated setUnupdatedData={setUnupdatedData}/>

    <UnupdatedRecordTable data={unupdatedData}/>
</div>

    )

}
export default Admin;