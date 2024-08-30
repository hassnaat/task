import { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleSubMenu = () => setIsSubMenuOpen(prev => !prev);

    return (
        <header className="header">
            <div className="topbar-wrap">
                <div className="logo">Hasnat's Task</div>
                <button className="hamburger-button" onClick={toggleMenu}>
                    &#9776;
                </button>
                <div className={`menu-box ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-item">Home</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item" onClick={toggleSubMenu}>
                        Services
                        <div className={`sub-menu ${isSubMenuOpen ? 'open' : ''}`}>
                            <div className="sub-menu-item">Web Design</div>
                            <div className="sub-menu-item">SEO</div>
                        </div>
                    </div>
                    <div className="menu-item">Contact</div>
                </div>
            </div>
            <nav className="horizontal-menu">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "menu-link active-item" : "menu-link"}
                >
                    Grid View
                </NavLink>
                <NavLink
                    to="/tile"
                    className={({ isActive }) => isActive ? "menu-link active-item" : "menu-link"}
                >
                    Tile View
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
