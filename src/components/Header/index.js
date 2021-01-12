import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    // const {
    //     categories = [],
    //     // setCurrentCategory,
    //     currentCategory,
    //     // contactSelected,
    //     // setContactSelected,
    //     // aboutSelected,
    //     // setAboutSelected
    // } = props;
    // const categories = [
    //     {
    //         name: "About Me",
    //         description: " ",
    //     },
    //     {
    //         name: "Portfolio", 
    //         description: "Projects I have worked on",
    //     },
    //     {
    //         name: "Resume",
    //         description: " ",
    //     },
    // ];

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Rachel Wagschal
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2`}> 
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={`mx-2`}> 
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`mx-2`}> 
                        <Link to="/Resume">Resume</Link>
                    </li>
                    <li className={`mx-2`}> 
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;