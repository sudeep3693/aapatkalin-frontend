import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


function AddContactModal({show,handleClose}) {


    const handleSubmit = ()=>{


    }

  return (
    <>
      

      <Modal show={show} onHide={handleClose} backdrop='static' className="blur-navbar" centered>
        <Modal.Header closeButton>
          <Modal.Title>Contribute a new contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <div className='justify-center text-center'>
        <button variant="primary" onClick={handleSubmit} className='manualWidth'>
           Submit
          </button>
        </div>
       

        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddContactModal;