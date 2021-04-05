import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const pages = [
    {
        id: "homepage",
        name: "About"
    },
    {
        id: "portfolio",
        name: "Portfolio"
    },
    {
        id: "resume",
        name: "Resume"
    },
    {
        id: "contact",
        name: "Contact"
    }

];

function AppNavbar({ currentPage, setCurrentPage }) {

    function getClassName(page) {
        return page === currentPage ? 'active' : ' ';
    }
    
    return (
        <>
            <Navbar expand='lg' expanded='true'>
                <Navbar.Brand href="/">
                    RACHEL WAGSCHAL
                </Navbar.Brand>
                {/* future dev: responsive toggle */}
                <Nav>
                    {
                        pages.map((page) => (
                            <Nav.Link key={page.id} className={getClassName(page.id)}
                                onClick={() => {
                                    setCurrentPage(page.id);
                                    document.title = page.name;
                            }}>
                            {page.name}
                            </Nav.Link>

                        ))
                    }
                    
                </Nav>
            </Navbar>
        </>
    );
};

export default AppNavbar;