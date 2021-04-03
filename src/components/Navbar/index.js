import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    
    return (
        <>
            <Navbar expand='lg' expanded='true'>
                <Navbar.Brand as={Link} to='/'>
                    RACHEL WAGSCHAL
                </Navbar.Brand>
                {/* future dev: responsive toggle */}
                <Nav>
                    {/* future dev: bold link on click/active */}
                    <Nav.Link href='/'>about</Nav.Link>
                    <Nav.Link href='/portfolio'>my work</Nav.Link>
                    <Nav.Link href='/resume'>resume</Nav.Link>
                    <Nav.Link href='/contact'>get in touch</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default AppNavbar;