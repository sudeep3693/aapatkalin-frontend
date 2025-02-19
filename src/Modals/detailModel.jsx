import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMap, faMapMarkerAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';


function AddDetailModal({ show, handleClose, databylang, selectedData={} }) {
    
    console.log(selectedData?.name);
    const [location,setLocation]=useState("");
    const[longitude,setLongitude] =useState();
    const[latitude,setLatitude] = useState();
    useEffect(()=>{
        setLatitude(selectedData?.latitude);
        setLongitude(selectedData?.longitude);
    },[selectedData]);
    

    useEffect(()=>{
        if(selectedData?.city)
            {
                setLocation(`${selectedData?.city}, ${selectedData?.district}`)
            }
            else{
                setLocation(selectedData?.district);
            }
    },[selectedData]);
    
    const  makeCall =async ()=>{

    
         setInterval(  alert("making call"),3000);

         window.location.href = selectedData?.number;
        
    }

    const openMap = () => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, "_blank"); 
      };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      className="custom-modalAbout blur-navbar"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-6 fw-2">
          <b>{selectedData?.name}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
            <Row className='border-bottom pb-0 manualRow' >
            <Col className='d-flex justify-content-between'>
                <h6 className='manualContent'>{databylang?.fields?.name?.title} :</h6>
                <h6 className='manualContent'>{selectedData?.name}</h6>
            </Col>
                </Row>
            <Row className='border-bottom pb-0 manualRow'>
            <Col className='d-flex justify-content-between'>
                <h6 className='manualContent'>{databylang?.fields?.category?.title}:</h6>
                <h6 className='manualContent'>{selectedData?.category}</h6>
            </Col>
                </Row>
            <Row className='border-bottom pb-0 manualRow'>
            <Col className='d-flex justify-content-between'>
                <h6 className='manualContent'>{databylang?.fields?.location?.title } :</h6>
                <h6 className='manualContent'>{location}</h6>
            </Col>
                </Row>
            <Row className='border-bottom pb-0 manualRow'>
            <Col className='d-flex justify-content-between'>
                <h6 className='manualContent'>{databylang?.fields?.province?.title} :</h6>
                <h6 className='manualContent'>{selectedData?.province}</h6>
            </Col>
                </Row>
            <Row className='border-bottom pb-0 manualRow'>
            <Col className='d-flex justify-content-between'>
                <h6 className='manualContent'>{databylang?.fields?.number?.title} :</h6>
                <h6 className='manualContent'>{selectedData?.number}</h6>
            </Col>
                </Row>
            <Row className='border-bottom pb-0 manualRow'>
            <Col className='d-flex justify-content-between'>
                <div className='manualContent mb-2' onClick={makeCall}>
                <FontAwesomeIcon icon={faPhone} size="lg" style={{ color: "Dark" }} /> <b className='fs-5'>Call</b>   
                </div>
                <div className='manualContent mb-2' onClick={openMap}>
                <FontAwesomeIcon icon={faMap} size="lg" style={{ color: "Dark" }} /><b className='fs-5'>View in Map</b>  
                </div>
            </Col>
                </Row>
              
           


        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddDetailModal;
