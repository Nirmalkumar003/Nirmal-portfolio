
import "./Education.css";

function Education() {
    const educationDetails = [
        {
            id: 1,
            year: "2022 – 2026",
            status: "GRADUATED",
            degree: "Bachelor of Technology",
            course: "Artificial Intelligence and Data Science",
            institution: "Adhi College of Engineering and Technology",
            location: "Kanchipuram",
            scoreLabel: "CGPA",
            score: "7.82 / 10",
        },
        {
            id: 2,
            year: "2021 – 2022",
            status: "COMPLETED",
            degree: "HSC – 12th Standard",
            course: "Higher Secondary Education",
            institution: "Government Higher Secondary School",
            location: "Devikapuram",
            scoreLabel: "Percentage",
            score: "65%",
        },
        {
            id: 3,
            year: "2019 – 2020",
            status: "COMPLETED",
            degree: "SSLC – 10th Standard",
            course: "Secondary School Education",
            institution: "Government Higher Secondary School",
            location: "Devikapuram",
            scoreLabel: "Percentage",
            score: "68%",
        },
    ];

    return (
        <section className="education-page" id="education">
            <div className="container">

                <div className="education-heading">
                    <span className="education-label">
                        MY QUALIFICATION
                    </span>

                    <h1>
                        Education <span>& Learning.</span>
                    </h1>

                    <p>
                        My academic journey and educational
                        qualifications.
                    </p>
                </div>

                <div className="education-timeline">

                    <div className="education-timeline-line"></div>

                    {educationDetails.map((item) => (
                        <div className="education-item" key={item.id}>

                            <div className="education-dot"></div>

                            <div className="education-card">

                                <div className="education-card-top">
                                    <span className="education-year">
                                        {item.year}
                                    </span>

                                    <span className="education-status">
                                        {item.status}
                                    </span>
                                </div>

                                <h2>{item.degree}</h2>

                                <h3>{item.course}</h3>

                                <p className="education-institution">
                                    {item.institution}
                                </p>

                                <p className="education-location">
                                    {item.location}
                                </p>

                                <div className="education-details">
                                    <div>
                                        <span>QUALIFICATION</span>
                                        <strong>{item.degree}</strong>
                                    </div>

                                    <div>
                                        <span>{item.scoreLabel}</span>
                                        <strong>{item.score}</strong>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                <div className="education-note">
                    <span>✦</span>
                    <p>
                        Building knowledge through academic learning,
                        practical projects, and continuous skill development.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Education;
