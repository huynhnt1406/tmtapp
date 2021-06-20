import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <Navbar style={{backgroundImage:'linear-gradient(#34A84A,#34A84A )',fontFamily: 'Montserrat'}} variant="dark">
            <Container>
                <Navbar.Brand style={{color:'white'}} href="#home">TMT</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home" style={{color:'white'}}>Join TMT</Nav.Link>
                <Nav.Link href="#features" style={{color:'white'}}>Cộng đồng</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>Dịch vụ</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
