import React from 'react';

function Experience() {
    const experiences = [
        {
            title: "Job Title at Company",
            duration: "Jan 2020 - Present",
            description: "Brief description of responsibilities and achievements."
        },
        // Add more experiences as needed
    ];

    return (
        <section id="experience" style={{ padding: '20px' }}>
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Experience;
