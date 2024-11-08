import React from 'react';

function Skills() {
    const skills = ["Skill 1", "Skill 2", "Skill 3"]; // Add more skills here

    return (
        <section id="skills" style={{ padding: '20px' }}>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
