import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faDatabase, faPalette, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaNodeJs, FaPython } from 'react-icons/fa';
import { FaMongoDB, FaDatabase, FaFigma, FaAdobe, FaSketch, FaGit, FaGithub, FaGitlab } from 'react-icons/fa';
import { FaCss3 as FaTailwindCSS, FaBootstrap } from 'react-icons/fa';
import { FaPhp, FaNode } from 'react-icons/fa';

const skillsData = [
    {
        id: 1,
        icon: faCode,
        title: 'Frontend Development',
        subSkills: [
            { icon: <FaHtml5 className="text-red-500" />, name: 'HTML5' },
            { icon: <FaCss3 className="text-blue-500" />, name: 'CSS3' },
            { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
            { icon: <FaReact className="text-blue-500" />, name: 'React' },
            { icon: <FaTailwindCSS className="text-indigo-500" />, name: 'Tailwind CSS' },
            { icon: <FaBootstrap className="text-purple-500" />, name: 'Bootstrap' },
        ],
    },
    {
        id: 2,
        icon: faCodeBranch,
        title: 'Backend Development',
        subSkills: [
            { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
            { icon: <FaPython className="text-blue-500" />, name: 'Python' },
            { icon: <FaPhp className="text-indigo-500" />, name: 'PHP' },
            { icon: <FaNode className="text-green-600" />, name: 'Express.js' },
        ],
    },
    {
        id: 3,
        icon: faDatabase,
        title: 'Database Management',
        subSkills: [
            { icon: <FontAwesomeIcon icon={faLeaf} className="text-green-500" />, name: 'MongoDB' },
            { icon: <FaDatabase className="text-blue-500" />, name: 'MySQL' },
        ],
    },
    
    {
        id: 4,
        icon: faCodeBranch,
        title: 'Version Control',
        subSkills: [
            { icon: <FaGit className="text-red-500" />, name: 'Git' },
            { icon: <FaGithub className="text-gray-800" />, name: 'GitHub' },
        ],
    },
];

function Skills() {
    return (
        <section className="py-16">
            <div className="container mx-auto ">
            <h2 className="text-4xl font-extrabold text-center text-blue-500 mb-6">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 lg:px-32 ">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                            <div className="mb-3">
                                <FontAwesomeIcon icon={skill.icon} className="text-3xl text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                            <div className="grid grid-cols-2 gap-1">
                                {skill.subSkills.map((subSkill, index) => (
                                    <div key={index} className="flex items-center">
                                        {subSkill.icon}
                                        <span className="ml-2">{subSkill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
