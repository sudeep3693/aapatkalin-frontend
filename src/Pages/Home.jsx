import "../App.css";
import NavBar from "../Components/NavBar";
import HeaderPart from '../Components/HeaderPart';
import FetchData from '../Components/fetchData';
import RecordTable from '../Components/RecordTable';
import { useState } from 'react';
import FetchByData from '../Components/fetchByData';
import Paginnation from '../Pagination/Pagination'
import Footer from '../FooterSection/Footer';
import ModalValidatee from '../Validations/ModalValidatedd';
import FetchRecords from '../FetchJson/fetchAll';
import LocationComponent from '../Resources/Location/CurrentLocation';
import FetchByLocation from '../Components/FetchByLocation';

function Home() {

  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [data, setData] = useState([]);
  const [byId, setById] = useState([]);
  const [byLocation, setByLocation] = useState([]);
  const [lStatus, setLStatus] = useState(true);
  const [search, setSearch] = useState("");
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [language, setLanguage] = useState(true);
  const [theme, setTheme] = useState(true);
  const [databylang, setdatabylang] = useState({});
  const [selectedData,setSelectedData] =useState([]);



  return (
    <>
      <LocationComponent longitudee={setLongitude} latitudee={setLatitude} />

      <FetchByLocation setData={setByLocation} longitude={longitude} latitude={latitude} />
      
      <NavBar setLanguage={setLanguage} lang={language} theme={theme} setTheme={setTheme} />

      <FetchRecords lang={language} setdatabylang={setdatabylang} />
      <HeaderPart setSearch={setSearch} databylang={databylang} setLStatus={setLStatus} lStatus={lStatus} />
      <FetchData setData={setData} />
      <FetchByData setData={setById} id={search} />
      <RecordTable data={byId} locationwise={byLocation} searchBy={search} lang={language} databylang={databylang} lStatus = {lStatus} setOpenDetailModal={setOpenDetailModal} selecteddata={setSelectedData}/>

      <Paginnation dataset={data} lang={language} databylang={databylang} setOpenDetailModal={setOpenDetailModal} selecteddata={setSelectedData}  />
      <Footer setOpenContactModal={setOpenContactModal} setOpenAboutModal={setOpenAboutModal} databylang={databylang} />
    

      <ModalValidatee openContactModal={openContactModal} openAboutModal={openAboutModal} setOpenContactModal={setOpenContactModal} setOpenAboutModal={setOpenAboutModal} openDetailModal={openDetailModal} setOpenDetailModal={setOpenDetailModal} databylang={databylang} selectedData={selectedData} />
 


    </>

  )




}



export default Home;
