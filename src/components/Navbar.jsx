
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={closeMenu}>
                    NIRMAL KUMAR
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="nav-hire-button"
                        onClick={closeMenu}
                    >
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
