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
            <h1 className="site-title-container">
                <a href="/" className="site-title">
                    RACHEL WAGSCHAL
                    {/* <img className="site-title" src={require(`../../assets/vector/logo.png`).default} alt="RACHEL WAGSCHAL"/>  */}
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