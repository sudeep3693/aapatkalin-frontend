import './App.css';
import NavBar from './Components/NavBar';
import HeaderPart from './Components/HeaderPart';
import FetchData from './Components/fetchData';
import RecordTable from './Components/RecordTable';
import { useState } from 'react';
import FetchByData from './Components/fetchByData';
import Paginnation from './Pagination/Pagination'
import Footer from './FooterSection/Footer';
import ModalValidatee from './Validations/ModalValidatedd';
import FetchRecords from './FetchJson/fetchAll';
function App() {


    const [data,setData]=useState([]);
    const [byId,setById] = useState([]);
    const [search,setSearch]=useState("");
    const [openAboutModal,setOpenAboutModal] = useState(false);
    const [openContactModal,setOpenContactModal] = useState(false);
    const [language, setLanguage] = useState(true);
    const [theme, setTheme] = useState(true);
    const [databylang,setdatabylang] = useState({});
  
    

  return(
    <> 
    
      <NavBar  setLanguage={setLanguage} lang={language} theme={theme} setTheme={setTheme}/>
      <FetchRecords lang = {language} setdatabylang={setdatabylang}/>
      <HeaderPart setSearch={setSearch}  databylang={databylang}/>
      <FetchData setData={setData}/>
      <FetchByData setData={setById} id={search}/>
      <RecordTable data={byId} searchBy ={search}  lang ={language} databylang={databylang}/>
    
      <Paginnation dataset={data} lang ={language} databylang={databylang}/>
      <Footer setOpenContactModal={setOpenContactModal}  setOpenAboutModal={setOpenAboutModal} databylang={databylang}/>
      
      <ModalValidatee  openContactModal={openContactModal}  openAboutModal={openAboutModal} setOpenContactModal={setOpenContactModal}  setOpenAboutModal={setOpenAboutModal}/>
     
      

    </>
   
  )

  


}



export default App;
