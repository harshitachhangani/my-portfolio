import React, { useEffect } from 'react';

const Skills = ({ skills }) => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach((progressBar, index) => {
      const skillLevel = skills[index].level;
      const radius = progressBar.getAttribute('r');
      const circumference = 2 * Math.PI * radius;
      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = circumference;
      let count = 0;
      const interval = setInterval(() => {
        if (count <= skillLevel) {
          const offset = ((100 - count) / 100) * circumference;
          progressBar.style.strokeDashoffset = offset;
          progressBar.querySelector('.progress-number').textContent = `${count}%`;
          count++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }, [skills]);

  return (
    <section>
      {skills.map((skill, index) => (
        <div key={index} className="parent-skill">
          <svg className="skill" width="200" height="200">
            <circle
              className="progress"
              cx="100"
              cy="100"
              r="90"
              strokeWidth="10"
              fill="transparent"
              data-progress={skill.level}
            ></circle>
            <text x="50%" y="50%" className="progress-number" dominantBaseline="middle" textAnchor="middle">
              0%
            </text>
          </svg>
          <span className="title">{skill.name}</span>
        </div>
      ))}
    </section>
  );
};

export default Skills;
