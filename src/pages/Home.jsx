
import "./Home.css";

function Home() {
    return (
        <section className="home-page" id="home">

            <div className="container home-container">

                {/* Left Side - Introduction */}
                <div className="home-content">

                    <div className="availability">
                        <span className="status-dot"></span>
                        OPEN TO FRONTEND OPPORTUNITIES
                    </div>

                    <p className="home-intro">
                        HELLO, I'M NIRMAL KUMAR
                    </p>

                    <h1>
                        Aspiring Frontend
                        <span> Developer.</span>
                    </h1>

                    <h2>
                        React Developer · UI Enthusiast
                    </h2>

                    <p className="home-description">
                        B.Tech graduate in Artificial Intelligence and Data Science,
                        passionate about building responsive and user-friendly web
                        applications using React, JavaScript, HTML, CSS, and Bootstrap.
                        Eager to contribute to a development team, solve real-world
                        problems, and grow as a frontend developer.
                    </p>

                    {/* Action Buttons */}
                    <div className="home-actions">

                        <a
                            href="/NIRMAL_KUMAR.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            View Resume ↗
                        </a>

                        <a
                            href="/NIRMAL_KUMAR.pdf"
                            download="Nirmal_Kumar_Resume.pdf"
                            className="btn-secondary"
                        >
                            Download Resume ↓
                        </a>

                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="home-socials">

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

                    </div>

                </div>

                {/* Right Side - Full Profile Photo */}
                <div className="home-visual">

                    <div className="profile-photo-card">

                        <img
                            src="/profile.jpg"
                            alt="Nirmal Kumar - Frontend Developer"
                            className="home-profile-image"
                        />

                    </div>

                </div>

            </div>

            {/* Technology Skills */}
            <div className="home-bottom container">

                <span>
                    BASED ON STRONG FUNDAMENTALS
                </span>

                <div className="home-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>BOOTSTRAP</span>
                </div>

            </div>

        </section>
    );
}

export default Home;
