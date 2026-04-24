import React, { useEffect, useRef } from "react";
import './Skills.css';

import ReactIcon from '../../assets/icons/react-removebg-preview.png';
import JSIcon from '../../assets/icons/js-removebg-preview.png';
import UXIcon from '../../assets/icons/ux-removebg-preview.png';
import GitIcon from '../../assets/icons/git-removebg-preview.png';
import SQLIcon from '../../assets/icons/sql-removebg-preview.png';
import UIIcon from '../../assets/icons/ui-removebg-preview.png';

const skillRows = [
    { id: 1, skills: [
        { name: 'React', icon: ReactIcon, color: '#61DAFB' },
        { name: 'JavaScript', icon: JSIcon, color: '#F7DF1E' },
    ]},
    { id: 2, skills: [
        { name: 'UX', icon: UXIcon, color: '#FF0054' },
        { name: 'UI', icon: UIIcon, color: '#b3b5bb' }
    ]},
    { id: 3, skills: [
        { name: 'SQL', icon: SQLIcon, color: '#264de4' },
        { name: 'Git', icon: GitIcon, color: '#F05032' },
    ]},
];

const Skills = () => {
    const rowRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const rect = entry.boundingClientRect;

                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.classList.remove('future', 'past');
                } else {
                    if (rect.top < 0) {
                        entry.target.classList.add('past');
                        entry.target.classList.remove('active', 'future');
                    } else {
                        entry.target.classList.add('future');
                        entry.target.classList.remove('active', 'past');
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px"
        });

        rowRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills-section">
            <div className="skills-container">

                <h2 className="section-title">Minhas <span className="destaque-title">Skills</span></h2>

                {skillRows.map((row, index) => (
                    <div 
                        key={row.id} 
                        className="skill-row future"
                        ref={el => rowRefs.current[index] = el}
                    >
                        {row.skills.map(skill => (
                            <div className="skill-card" key={skill.name} style={{ '--skill-color': skill.color }}>
                                <img src={skill.icon} alt={skill.name} className="skill-icon-img" /> 
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div> 
        </section>
    );
}

export default Skills;