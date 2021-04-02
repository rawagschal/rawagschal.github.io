import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// export const pages = [
    //     {
    //         id: "homepage",
    //         name: "About"
    //     },
    //     {
    //         id: "portfolio", 
    //         name: "Portfolio",
    //     },
    //     {
    //         id: "resume",
    //         name: "Resume"
    //     },
    //     {
    //         id: "contact",
    //         name: "Contact"
    //     }
    // ];

const AppNavbar = ({ currentPage, setCurrentPage }) => {
    
   function getClassName(page) {
        return page === currentPage ? 'active' : '';
    }

    
    return (
        <>
            <Navbar expand='lg' expanded='true'>
                <Navbar.Brand as={Link} to='/'>
                    RACHEL WAGSCHAL
                </Navbar.Brand>
                {/* future dev: responsive toggle */}
                <Nav>
                    <Nav.Link href='/' className={getClassName(page.id)}onClick={() => setCurrentPage(true)}>
                        about
                    </Nav.Link>
                    <Nav.Link href='/portfolio'>my work</Nav.Link>
                    <Nav.Link href='/resume'>resume</Nav.Link>
                    <Nav.Link href='/contact'>get in touch</Nav.Link>
                </Nav>
                {/* <div className="navigation-items">
                    <div className="navigation-wrap">
                        <nav>
                            {
                                pages.map((page) => (
                                    
                                    // <a key={page.id} href={page.id} className="navigation-item" 
                                    //     onClick={() => {
                                    //         setCurrentPage(page.id);
                                    //         document.title = page.name;
                                    //         document.href = page.name;
                                    //     }}
                                    // >
                                    //     {page.name}
                                    // </a>
                                    
                                ))
                            }
                        </nav>
                    </div>
                </div> */}
                
            </Navbar>
        </>
    );
};

export default AppNavbar;