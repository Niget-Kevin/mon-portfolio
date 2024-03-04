import React from 'react';

import './Header.scss';

function Header() {
    
    
    return (                   
        <header className="main-nav">
            <div className="header-img header-img-desktop">
                {/* insertion logo ou image  */}
                <div className="header-img-mousemove"></div>
            </div>
            <span className="header-img-mobile">
                
            </span>
            <nav id="navbar">
                <ul>
                    <li>
                        <a href="#home">
                            <span className="nav-text">Accueil</span>
                            <i className="fa-solid fa-house nav-icon" title="Accueil"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#profile">
                            <span className="nav-text">Profil</span>
                            <i className="fa-solid fa-circle-user nav-icon" title="Profil"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <span className="nav-text">Compétences</span>
                            <i className="fa-solid fa-screwdriver-wrench nav-icon" title="Compétences"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            <span className="nav-text">Réalisations</span>
                            <i className="fa-solid fa-code nav-icon" title="Réalisations"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span className="nav-text">Contact</span>
                            <i className="fa-solid fa-envelope nav-icon" title="Contact"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>        
    )
}

export default Header;
