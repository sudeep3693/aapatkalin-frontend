import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function AddAboutModal({ show, handleClose, databylang }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      className="custom-modalAbout blur-navbar"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-5 fw-2">
          <b>{databylang?.footer?.about}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <p className="mt-2 text-justify">{databylang?.about?.about_project}</p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col>
              <p className="mt-4 mb-2 text-justify">{databylang?.about?.disclaimer}</p>
            </Col>
          </Row>


          <Row className='mt-3' >
            <Col>
              <a href="https://github.com/sudeep3693/aakashmik-frontend" target="_blank" rel="noopener noreferrer" >
                <div className='d-flex'>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <h5 className='ms-2'>{databylang?.footer?.contribute}</h5>
                </div>

              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddAboutModal;
