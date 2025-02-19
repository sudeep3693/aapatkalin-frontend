import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

function AddContactModal({ show, handleClose, databylang }) {
  const [categories, setCategories] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });


  const apiPath = "http://localhost:8080/backaakashmik/";
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    category: '',
    province: '',
    district: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    category: '',
    province: '',
    district: '',
    city: '',
  });

  useEffect(() => {
    if (databylang?.categories) {
      setCategories(Object.values(databylang.categories));
    }

    if (databylang?.provinces) {
      setProvinces(Object.entries(databylang.provinces).map(([key, value]) => ({
        key,
        ...value
      })));
    }
  }, [databylang]);

  const handleProvinceChange = (e) => {
    const provinceKey = e.target.value;
    setSelectedProvince(provinceKey);

    const selectedProvinceObj = provinces.find(p => p.key === provinceKey);

    if (selectedProvinceObj?.districts) {
      const districtArray = Object.entries(selectedProvinceObj.districts).map(([key, value]) => ({
        key,
        title: value.title
      }));
      setDistricts(districtArray);
    } else {
      setDistricts([]);
    }

    setFormData({ ...formData, province: provinceKey, district: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: '',
      number: '',
      category: '',
      province: '',
      district: '',
      city: '',
    });

    let validationErrors = {};

    if (!formData.name) validationErrors.name = databylang?.fields?.name?.error;
    if (!formData.number) validationErrors.number = databylang?.fields?.number?.error;
    if (!formData.category) validationErrors.category = databylang?.fields?.category?.error;
    if (!formData.province) validationErrors.province = databylang?.fields?.province?.error;
    if (!formData.district) validationErrors.district = databylang?.fields?.district?.error;
    if (!formData.city) validationErrors.city = databylang?.fields?.city?.error;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);

    fetch(`${apiPath}api/postDetailUnverified`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        handleClose();
      })
      .catch(error => {
        console.error("Error:", error);
        handleClose();
      });
  };

  const CategoryKey = (value) => {
    const categories = databylang?.categories || {};
    return Object.keys(categories).find((key) => categories[key] === value) || "Not Found";
  };


  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      className="custom-modal blur-navbar"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-5 fw-2"><b>{databylang?.contribute_form?.title}</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid className="searchbox">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder={databylang?.fields?.name?.placeholder}
                  className="manageInputField"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </Col>
              <Col md={6}>
                <input
                  type="number"
                  name="number"
                  placeholder={databylang?.fields?.number?.placeholder}
                  className="manageInputField"
                  value={formData.number}
                  onChange={handleInputChange}
                />
                {errors.number && <div className="error-message">{errors.number}</div>}
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <select
                  name="category"
                  className="manageInputField"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>{databylang?.fields?.category?.placeholder}</option>
                  {categories.map((cat, key) => (
                    <option key={key} value={CategoryKey(cat)}>{cat}</option>
                  ))}
                </select>
                {errors.category && <div className="error-message">{errors.category}</div>}
              </Col>

              <Col md={6}>
                <select
                  name="province"
                  className="manageInputField"
                  value={formData.province}
                  onChange={handleProvinceChange}
                >
                  <option value="" disabled>{databylang?.fields?.province?.placeholder}</option>
                  {provinces.map((province) => (
                    <option key={province.key} value={province.key}>
                      {province.title}
                    </option>
                  ))}
                </select>
                {errors.province && <div className="error-message">{errors.province}</div>}
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <select
                  name="district"
                  className="manageInputField"
                  value={formData.district}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>{databylang?.fields?.district?.placeholder}</option>
                  {districts.map((district) => (
                    <option key={district.key} value={district.key}>
                      {district.title}
                    </option>
                  ))}
                </select>
                {errors.district && <div className="error-message">{errors.district}</div>}
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="city"
                  placeholder={databylang?.fields?.city?.placeholder}
                  className="manageInputField"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <div className="error-message">{errors.city}</div>}
              </Col>
            </Row>

            

            <Row>
              <Col>
                <button className="manageInputSubmit" type="submit">
                  {databylang?.contribute_form?.submit}
                </button>
              </Col>
            </Row>

         

          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddContactModal;
