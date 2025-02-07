import { useState, useEffect } from "react";
import AddContactModal from "../Modals/AddContactModal";
import AddAboutModal from "../Modals/addAboutModal";

function ModalValidatee({ openContactModal, openAboutModal, setOpenContactModal, setOpenAboutModal,databylang }) {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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

  return (
    <>
      {console.log("showContact:", showContact)}
      <AddContactModal show={showContact} handleClose={() => setShowContact(false) } databylang={databylang} />
        <AddAboutModal show={showAbout} handleClose={()=> setShowAbout(false)} databylang={databylang}/>
    </>
  );
}

export default ModalValidatee;
