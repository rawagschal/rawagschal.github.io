import React from 'react';
import ghLogo from '../../assets/img/ghLogo32.png';
import liLogo from '../../assets/img/liLogo.png'
import soLogo from '../../assets/img/soLogo.png'

function Footer() {
    return (
        <footer>
            <ul className="footer-items">
                <li><a href="https://github.com/rawagschal" target="_blank" rel="noreferrer">
                    <img src={ghLogo} alt="Github" className="gh-logo" />
                </a></li>
                <li><a href="https://www.linkedin.com/in/rachelwag" target="_blank" rel="noreferrer">
                    <img src={liLogo} alt="Linkedin" className="li-logo" />
                </a></li>
                <li><a href="https://stackoverflow.com/users/14019495/rachel-wagschal" target="_blank" rel="noreferrer">
                     <img src={soLogo} alt="Stack Overflow" className="so-logo" />
                </a></li>
            </ul>
        </footer>
    )
}

export default Footer;