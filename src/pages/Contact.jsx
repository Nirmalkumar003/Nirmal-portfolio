
import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailSubject = encodeURIComponent(
            formData.subject || "Portfolio Contact"
        );

        const emailBody = encodeURIComponent(
            `Hello Nirmal,

${formData.message}

Regards,
${formData.name}
Email: ${formData.email}`
        );

        window.location.href =
            `mailto:knirmalkumar093@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <section className="contact-page" id="contact">
            <div className="contact-container">

                {/* Section Heading */}
                <div className="contact-heading">
                    <span className="contact-subtitle">
                        OPEN TO WORK
                    </span>

                    <h2>
                        Let's Connect for <span>Opportunities.</span>
                    </h2>

                    <p>
                        Actively looking for entry-level developer roles.
                        If you're hiring or have a suitable opportunity,
                        I'd love to connect.
                    </p>
                </div>

                <div className="contact-content">

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Available for Opportunities</h3>

                        <p className="contact-intro">
                            I'm Nirmal Kumar T, an entry-level developer
                            actively seeking opportunities in Frontend
                            Development, React Development, and Java Full
                            Stack Development. I'm eager to apply my
                            technical skills, contribute to a professional
                            team, and grow through real-world experience.
                            I'd be happy to connect with recruiters,
                            companies, and fellow developers.
                        </p>

                        {/* Email */}
                        <div className="contact-detail">
                            <div className="contact-icon">✉</div>

                            <div>
                                <span>Email Address</span>
                                <a href="mailto:knirmalkumar093@gmail.com">
                                    knirmalkumar093@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="contact-detail">
                            <div className="contact-icon">⌘</div>

                            <div>
                                <span>GitHub Profile</span>
                                <a
                                    href="https://github.com/Nirmalkumar003"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/Nirmalkumar003
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="contact-detail">
                            <div className="contact-icon">in</div>

                            <div>
                                <span>LinkedIn Profile</span>
                                <a
                                    href="https://www.linkedin.com/in/nirmal-kumar-aa29082ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View LinkedIn Profile
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="contact-availability">
                            <span className="availability-dot"></span>
                            Available for Entry-Level Opportunities
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h3>Send Me a Message</h3>

                        <form
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >

                            <div className="form-group">
                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Example: Job Opportunity"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                            >
                                Send Message <span>↗</span>
                            </button>

                            <p className="form-note">
                                Clicking Send Message opens your default
                                email application with your message
                                prepared.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
