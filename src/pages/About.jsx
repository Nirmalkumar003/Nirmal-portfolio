
import "./About.css";

function About() {
    return (
        <section className="about-page" id="about">
            <div className="container">

                <div className="about-heading">
                    <span className="about-label">GET TO KNOW ME</span>
                    <h1>About <span>Me.</span></h1>
                    <p>
                        A little introduction to my background, technical
                        interests, and professional aspirations.
                    </p>
                </div>

                <div className="about-content">

                    <div className="about-main">
                        <span className="about-subtitle">MY INTRODUCTION</span>
                        <h2>Building my journey in <span>Technology.</span></h2>

                        <p>
                            Hello! I'm Nirmal Kumar, a B.Tech graduate in
                            Artificial Intelligence and Data Science with
                            a strong interest in frontend development and
                            modern web technologies.
                        </p>

                        <p>
                            I enjoy developing responsive and user-friendly
                            web applications using HTML, CSS, JavaScript,
                            React, and Bootstrap. Through hands-on projects,
                            I have gained practical experience in component-based
                            development, UI design, and building interactive
                            web interfaces.
                        </p>

                        <p>
                            I am continuously strengthening my programming
                            knowledge and exploring new technologies. My
                            career goal is to start as a frontend developer,
                            contribute to real-world applications, and grow
                            into a skilled software professional.
                        </p>

                        <div className="about-tech-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML & CSS</span>
                            <span>Bootstrap</span>
                        </div>
                    </div>

                    <div className="about-info-card">
                        <div className="about-card-heading">
                            <span className="about-card-dot"></span>
                            <h3>Professional Overview</h3>
                        </div>

                        <div className="about-info-item">
                            <span>EDUCATION</span>
                            <strong>B.Tech – AI & Data Science</strong>
                        </div>

                        <div className="about-info-item">
                            <span>GRADUATION YEAR</span>
                            <strong>2026</strong>
                        </div>

                        <div className="about-info-item">
                            <span>PRIMARY INTEREST</span>
                            <strong>Frontend Development</strong>
                        </div>

                        <div className="about-info-item">
                            <span>TECHNOLOGY FOCUS</span>
                            <strong>React & JavaScript</strong>
                        </div>

                        <div className="about-info-item">
                            <span>CAREER LEVEL</span>
                            <strong>Entry-Level / Fresher</strong>
                        </div>
                    </div>

                </div>

                <div className="about-focus">

                    <div className="about-section-heading">
                        <span className="about-label">WHAT I FOCUS ON</span>
                        <h2>My Professional Interests</h2>
                        <p>
                            Areas where I am building my knowledge and
                            developing my skills.
                        </p>
                    </div>

                    <div className="focus-grid">

                        <div className="focus-card">
                            <div className="focus-icon">01</div>
                            <h3>Frontend Development</h3>
                            <p>
                                Developing responsive and interactive web
                                interfaces using React, JavaScript, HTML,
                                and CSS.
                            </p>
                        </div>

                        <div className="focus-card">
                            <div className="focus-icon">02</div>
                            <h3>UI & User Experience</h3>
                            <p>
                                Creating clean layouts, consistent designs,
                                and intuitive experiences for website users.
                            </p>
                        </div>

                        <div className="focus-card">
                            <div className="focus-icon">03</div>
                            <h3>Continuous Learning</h3>
                            <p>
                                Strengthening programming fundamentals and
                                exploring modern development tools and
                                technologies.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
