import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function HeaderPart({ setSearch, databylang, setLStatus }) {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const formSearch = async (e) => {
        if (e) e.preventDefault(); // Prevent default form submission

        await setSearch(formData);
        setLStatus(!formData); // If formData is empty, setLStatus(true); otherwise, setLStatus(false)
    };

    return (
        <Container fluid className='margin_manual'>
            <Row>
                <Col md={10} className='offset-md-1 mb-3 text-center'>
                    <h2 className='text-center fs-1 fw-bold'>{databylang.action_text}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={8} sm className='offset-md-2 mt-3'>
                    <div className='searchBox'>
                        {/* Correct onSubmit usage */}
                        <form onSubmit={formSearch} method='post'>
                            <input 
                                type="text" 
                                name="searchItem" 
                                className="manageInputFieldHeader" 
                                onChange={handleChange} 
                                value={formData} 
                                placeholder={databylang.search?.placeholder} 
                            />
                        </form>
                        <Button onClick={formSearch}>
                            <FontAwesomeIcon icon={faSearch} width={"42"} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8} sm className='offset-md-2 mt-3 text-center'>
                    <div className="popularSearchesContainer">
                        <span className="popularSearches">{databylang.search?.label}:</span>
                        <div className="buttonsContainer">
                            <button className="buttons" onClick={() => (setSearch("police"), setLStatus(false))}>
                                <u>{databylang.categories?.police}</u>
                            </button>
                            <button className="buttons" onClick={() => (setSearch("ambulance"), setLStatus(false))}>
                                <u>{databylang.categories?.ambulance}</u>
                            </button>
                            <button className="buttons" onClick={() => (setSearch("hospital"), setLStatus(false))}>
                                <u>{databylang.categories?.hospital}</u>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderPart;
