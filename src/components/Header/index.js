import React from 'react';


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
    const categories = [
        {
            name: "About Me",
            description: " ",
        },
        {
            name: "Portfolio", 
            description: "Projects I have worked on",
        },
        {
            name: "Resume",
            description: " ",
        },
    ];

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Rachel Wagschal
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}> 
                        <span onClick={() => setContactSelected(true)} >Contact</span>
                    </li>
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}> 
                        <span onClick={() => setAboutSelected(true)} >About</span>
                    </li> */}
                    {categories.map((category) => (
                        <li 
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                                }`} 
                            key={category.name}
                        >
                            <span 
                                onClick={() => { props.handlePageChange(category)
                                    // setCurrentCategory(category)
                                    // setContactSelected(false);
                                }}
                            >
                                {(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;