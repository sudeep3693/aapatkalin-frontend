import { useState, useEffect } from "react";
import AddContactModal from "../Modals/AddContactModal";
import AddAboutModal from "../Modals/addAboutModal";
import AddDetailModal from '../Modals/detailModel';

function ModalValidatee({ openContactModal, openAboutModal, setOpenContactModal, setOpenAboutModal,databylang,openDetailModal, setOpenDetailModal, selectedData }) {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDetail,setShowDetail] = useState(false);

  // Update state only when props change
  useEffect(() => {
    if (openContactModal) {
      
      setShowContact(true);
      setOpenContactModal(!openContactModal);
    }
  }, [openContactModal]); // Runs only when openContactModal changes

  useEffect(() => {
    if (openAboutModal) {
      setShowAbout(true);
      setOpenAboutModal(!openAboutModal);
    }
  }, [openAboutModal]); // Runs only when openAboutModal changes


  useEffect(() => {
    if (openDetailModal) {
      setShowDetail(true);
      setOpenDetailModal(!openDetailModal);
    }
  }, [openDetailModal]); // Runs only when openDetailModal changes
  return (
    <>
      {console.log("showContact:", showContact)}
      <AddContactModal show={showContact} handleClose={() => setShowContact(false) } databylang={databylang} />
        <AddAboutModal show={showAbout} handleClose={()=> setShowAbout(false)} databylang={databylang}/>
        <AddDetailModal show={showDetail} handleClose={()=> setShowDetail(false)} databylang={databylang} selectedData={selectedData}/>
          
    </>
  );
}

export default ModalValidatee;
