import React from 'react';

export const pages = [
        {
            id: "homepage",
            name: "About"
        },
        {
            id: "portfolio", 
            name: "Portfolio",
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

function Header({ currentPage, setCurrentPage }) {
   
   function getClassName(page) {
        return page === currentPage ? 'active' : '';
    }
    
    return (
        <header className="header-conatiner">
            <h1>
                <a href="/" className="site-title">
                    Rachel Wagschal
                </a>
            </h1>
            <nav>
                <ul className="nav-items">
                    {
                        pages.map((page) => (
                            <li key={page.id} className={getClassName(page.id)} 
                                onClick={() => {
                                    setCurrentPage(page.id);
                                    document.title = page.name;
                                }}
                            >
                                {page.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;