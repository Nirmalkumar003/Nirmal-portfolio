
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            NIRMAL KUMAR T
                        </a>

                        <p>
                            Entry-Level Developer | Frontend & React
                            Development | Java Full Stack
                        </p>

                        <p className="footer-message">
                            Building responsive web experiences and
                            continuously growing as a developer.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#education">Education</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* Connect */}
                    <div className="footer-connect">
                        <h3>Connect With Me</h3>

                        <a href="mailto:knirmalkumar093@gmail.com">
                            Email Me ↗
                        </a>

                        <a
                            href="https://github.com/Nirmalkumar003"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nirmal-kumar-aa29082ba/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919025206253"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp ↗
                        </a>

                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p>
                        © {currentYear} Nirmal Kumar T.
                        All Rights Reserved.
                    </p>

                    <a href="#home" className="back-to-top">
                        Back to Top ↑
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
