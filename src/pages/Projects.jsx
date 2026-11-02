
import "./Projects.css";

const projects = [
    {
        number: "01",
        title: "AutoMarket",
        category: "Frontend Development",
        description:
            "A responsive used car and bike marketplace built with React. Users can explore vehicles, apply filters, compare options, manage wishlists, and access vehicle selling features.",
        technologies: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
            "React Router",
        ],
        github: "https://github.com/Nirmalkumar003/AutoMarket",
        featured: true,
    },
    {
        number: "02",
        title: "Gym Management System",
        category: "Software Development",
        description:
            "A gym management project designed to support the organization of gym-related information and management activities.",
        technologies: [
            "Gym Management",
            "Software Development",
        ],
        github:
            "https://github.com/Nirmalkumar003/gym-management-system",
        featured: false,
    },
    {
        number: "03",
        title: "Face Recognition Based Attendance System",
        category: "AI / Computer Vision",
        description:
            "An automated attendance system that uses face recognition to identify users and record attendance. It integrates a camera-based recognition workflow with a database.",
        technologies: [
            "Python",
            "Flask",
            "OpenCV",
            "SQLite",
            "Face Recognition",
        ],
        github: "",
        featured: false,
    },
    {
        number: "04",
        title: "Rural AI Command Center",
        category: "AI / Full Stack Development",
        description:
            "An AI-powered assistant designed to support rural communities through features such as plant disease identification, student assistance, voice interaction, and reminders.",
        technologies: [
            "Python",
            "Flask",
            "AI",
            "NLP",
            "SQLite",
        ],
        github: "",
        featured: false,
    },
];

function Projects() {
    return (
        <section className="projects-page" id="projects">
            <div className="projects-container">

                <div className="projects-heading">
                    <span className="projects-subtitle">
                        MY RECENT WORK
                    </span>

                    <h2>
                        My <span>Projects.</span>
                    </h2>

                    <p>
                        Explore some of the projects I have developed
                        while learning and applying my technical skills.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            className={`project-card ${project.featured ? "featured-project" : ""
                                }`}
                            key={project.number}
                        >
                            <div className="project-card-top">
                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-category">
                                    {project.category}
                                </span>
                            </div>

                            <div className="project-card-content">
                                <h3>{project.title}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-card-footer">
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <span>View GitHub</span>
                                        <span className="project-arrow">↗</span>
                                    </a>
                                ) : (
                                    <span className="project-coming-soon">
                                        Repository link coming soon
                                    </span>
                                )}

                                <span className="project-demo-status">
                                    Live Demo coming soon
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-bottom-note">
                    <p>
                        I'm continuously building new projects and improving
                        my development skills.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Projects;
