import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo-text">Logo</div>
                    <div className="menu-icon" onClick={toggleMenu} tabIndex="0">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
                        <a href="#">About technology</a>
                        <a href="#">Benefits</a>
                        <a href="#">Prices</a>
                        <a href="#">Blog</a>
                        <a href="#">Contacts</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="logo">
                        <div className="overlay"></div>
                        <div className="text">
                            <h2>New Generation 3D</h2>
                            <h2>Tours - One Click</h2>
                            <h2>Presentation</h2>
                            <p>Effective tool for business</p>
                            <a href="#" className="cta-button">Learn more</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export { Header }
