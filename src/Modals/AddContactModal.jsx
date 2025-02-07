import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

function AddContactModal({ show, handleClose, databylang }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [categories, setCategories] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);  // ✅ Default empty array
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    if (databylang?.categories) {
      setCategories(Object.values(databylang.categories));
    }

    if (databylang?.provinces) {
      setProvinces(Object.values(databylang.provinces));
    }
  }, [databylang]);

  // Function to handle province selection and load districts dynamically
  const handleProvinceChange = (e) => {
    const provinceTitle = e.target.value;
    setSelectedProvince(provinceTitle);
  
    const selectedProvince = provinces.find((p) => p.title === provinceTitle);
  
    // ✅ Convert district object into an array
    const districtArray = selectedProvince?.districts
      ? Object.values(selectedProvince.districts).map(d => d.title)
      : [];
  
    setDistricts(districtArray);
  };
  

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="custom-modal blur-navbar "
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 fw-2">{databylang?.contribute_form?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className="searchbox">
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} sm>
                  <input type="text" placeholder={databylang?.fields?.name?.placeholder} className="manageInputField" />
                </Col>
                <Col md={6} sm>
                  <input type="text" placeholder={databylang?.fields?.number?.placeholder} className="manageInputField" />
                </Col>
              </Row>

              <Row>
                <Col md={6} sm>
                  <select id="category" name="category" className="manageInputField">
                    <option value="" disabled selected>
                      {databylang?.fields?.category?.placeholder}
                    </option>
                    {categories.map((cat, key) => (
                      <option key={key} value={cat}>{cat}</option>
                    ))}
                  </select>
                </Col>

                {/* Province Dropdown */}
                <Col md={6} sm>
                  <select
                    id="province"
                    name="province"
                    className="manageInputField"
                    onChange={handleProvinceChange}
                  >
                    <option value="" disabled selected>
                      {databylang?.fields?.province?.placeholder}
                    </option>
                    {provinces.map((province, index) => (
                      <option key={index} value={province.title}>
                        {province.title}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>

              <Row>
                {/* District Dropdown (Populated Based on Selected Province) */}
                <Col md={6} sm>
                  <select id="district" name="district" className="manageInputField">
                    <option value="" disabled selected>
                      {databylang?.fields?.district?.placeholder}
                    </option>
                    {Array.isArray(districts) &&
                      districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                  </select>
                </Col>
                <Col md={6} sm>
                  <input type="text" placeholder={databylang?.fields?.city?.placeholder} className="manageInputField" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <button className='manageInputSubmit' type='submit'>
                    {databylang?.contribute_form?.submit}
                  </button>
                </Col>
              </Row>

            </form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddContactModal;
