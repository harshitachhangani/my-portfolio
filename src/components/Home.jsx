import React, { useState } from 'react';
import profilePicture from '../assets/imgs/ProfilePic.png';
import space from '../assets/imgs/space.png';
import hackmatchr from '../assets/imgs/hackmatchr.png';
import movies_app from '../assets/imgs/movies_app.png';
import { FaSun, FaMoon } from 'react-icons/fa';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Java', level: 65 },
  { name: 'Python-Django', level: 55 },
  { name: 'Javascript', level: 90 },
  { name: 'C++', level: 70 },
  { name: 'C', level: 70 },
];

const projects = [
  {
    title: 'Space Biology Website',
    description: 'Created a Space Biology Superhero Website which contains all information of space related fields and researches. It is a responsive website with all the required pages linked with it. Created using Javascript.',
    demoLink: 'https://project1-demo.com',
    sourceLink: 'https://github.com/username/project1',
    screenshot: space,
  },
  {
    title: 'Hackmatchr',
    description: 'HackMatchr is a platform designed to connect talented coders and tech enthusiasts from all around the world. Whether you are a student, a professional, or just a passionate coder, HackMatchr provides the perfect environment to find like-minded individuals and form teams for hackathons, projects, and collaborative learning. It is an MERN stack website.',
    demoLink: 'https://project2-demo.com',
    sourceLink: 'https://github.com/username/project2',
    screenshot: hackmatchr,
  },
  {
    title: 'Movies App',
    description: 'The Movies App is a web application built using JavaScript that allows users to browse and discover information about movies. The app provides an intuitive and user-friendly and responsive interface to search for movies, view their details, and explore related information.',
    demoLink: 'https://project3-demo.com',
    sourceLink: 'https://github.com/username/project3',
    screenshot: movies_app,
  },
  // Add more projects as needed
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend server
    console.log(formData);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement the actual dark/light mode switching logic here
  };

  return (
    <section className={`bg-gray-100 ${isDarkMode ? 'dark' : ''}`}>

      {/* Navbar */}
      <nav className={`p-5 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-dark'} drop-shadow-xl sticky top-0`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-semibold text-xl">Harshita Chhangani</div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="font-semibold text-xl hover:text-blue-300">Home</a></li>
            <li><a href="#projects" className="font-semibold text-xl hover:text-blue-300">Projects</a></li>
            <li><a href="#skills" className="font-semibold text-xl hover:text-blue-300">Skills</a></li>
            <li><a href="#contact" className="font-semibold text-xl hover:text-blue-300">Contact</a></li>
          </ul>
          <button
            className="text-xl"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>
      </nav>

      {/* Intro */}
      <div id="home" className="max-w-6xl mx-auto flex items-center py-10">
        <div className="w-2/3">
          <h1 className="text-4xl font-semibold mb-4">Hi I am Harshita, Developer!</h1>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            Hii I'm Harshita, a software developer specializing in web development arena. Comfortable with NodeJS and React Js and Python-Django and Java. Currently Learning App development using Flutter. Also have slight interest in Space technologies. Always looking forward to explore more in the field of coding. I'm a passionate developer and designer, dedicated to creating amazing web experiences.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Connect with me!
          </a>
        </div>
        <div className="w-1/2 text-center">
          <div className="mx-auto mb-4">
            <img
              src={profilePicture}
              alt="Your Name"
              className="w-48 h-48 rounded-full object-cover"
              style={{ marginLeft: '15rem' }}
            />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex-grow"></div>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <a
                  href={project.sourceLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 py-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-semibold">{skill.name}</p>
              <div className="bg-gray-300 h-5 rounded-full">
                <div
                  className="bg-blue-600 text-white h-5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 mb-3 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2023 Harshita Chhangani. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Home;
