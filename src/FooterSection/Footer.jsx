import { Col, Container, Row } from "react-bootstrap";
import '../App.css'


function Footer({setOpenContactModal,setOpenAboutModal, databylang}){

    const addContact = ()=>{
    setOpenContactModal(true);

     
    }

    const aboutUs = ()=>{
    setOpenAboutModal(true);


    }
return(


<div>
    <Container fluid>
        <Row className="mt-4">
            <Col md={4} sm className="offset-md-4 mt-3 text-center mb-4">
            <div>
            <h2 className=" App-Navbar text-primary">Apatkalin</h2>
            </div>
            <div>
                <button className="buttons" onClick={()=>addContact()}><u>{databylang.footer?.add_contact}</u></button>
                <button className="buttons"onClick={()=>aboutUs()}><u>{databylang.footer?.about}</u></button>
            </div>
            </Col>
        </Row>

    </Container>
</div>

)
}
export default Footer;