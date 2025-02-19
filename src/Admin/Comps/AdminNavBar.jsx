import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { useState } from 'react';
import '../../App.css';


function AdminNavBar({setLanguage, lang , theme, setTheme}) {

const handleLanguage = ()=>{
setLanguage(!lang)
}

const handleTheme = ()=>{
setTheme(!theme)
}




  return (
    <>
      <Navbar fixed='top' className='blur-navbar'>
        <Container fluid >
        <Navbar.Brand className=" App-Navbar text-primary">Aakashmik</Navbar.Brand>
        <Nav>

       
        </Nav>
          
        </Container>
      </Navbar>

      </>
  )
}

export default AdminNavBar;