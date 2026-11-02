
import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            number: "01",
            title: "Frontend Development",
            description: "Building responsive and interactive web interfaces.",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Bootstrap",
                "Tailwind CSS",
                "Responsive Design",
            ],
        },
        {
            number: "02",
            title: "Programming",
            description: "Developing programming and backend fundamentals.",
            skills: [
                "Java",
                "Core Java",
                "OOP Concepts",
                "JDBC",
                "Spring Boot",
            ],
        },
        {
            number: "03",
            title: "Database",
            description: "Working with relational databases and SQL queries.",
            skills: [
                "SQL",
                "MySQL",
                "Database Management",
            ],
        },
        {
            number: "04",
            title: "Tools & Technologies",
            description: "Using development tools and version control systems.",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Eclipse",
            ],
        },
    ];

    return (
        <section className="skills-page" id="skills">
            <div className="container">

                {/* Section Heading */}
                <div className="skills-heading">
                    <span className="skills-label">MY TECHNICAL EXPERTISE</span>

                    <h1>
                        My <span>Skills.</span>
                    </h1>

                    <p>
                        Technologies and tools I use to build applications,
                        solve problems, and continuously improve my skills.
                    </p>
                </div>

                {/* Skills Cards */}
                <div className="skills-grid">

                    {skillCategories.map((category) => (
                        <div className="skill-card" key={category.number}>

                            <div className="skill-card-top">
                                <span className="skill-number">
                                    {category.number}
                                </span>

                                <span className="skill-line"></span>
                            </div>

                            <h2>{category.title}</h2>

                            <p className="skill-description">
                                {category.description}
                            </p>

                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom Message */}
                <div className="skills-footer-note">
                    <span>✦</span>
                    <p>
                        Always learning, practising, and exploring
                        new technologies to grow as a developer.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Skills;
