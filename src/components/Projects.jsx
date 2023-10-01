import React, { useState } from 'react';
import movie from "../assets/imgs/movies_app.png";
import hack from "../assets/imgs/hackmatchr.png";
import space from "../assets/imgs/space.png";

const cardData = [
  {
    id: 1,
    title: "Movies App",
    description: "The Movies App is a web application built using JavaScript that allows users to browse and discover information about movies. ",
    demoLink: "https://movies-guide-app.netlify.app/",
    sourceLink: "https://github.com/harshitachhangani/MoviesApp",
    imageSrc: movie,
  },
  {
    id: 2,
    title: "HackMatchr",
    description: "HackMatchr is a MERN stack platform designed to connect and provides the perfect environment to find like-minded individuals and form teams for hackathons ",
    demoLink: "#",
    sourceLink: "#",
    imageSrc: hack,
  },
  {
    id: 3,
    title: "Space Biology Superhero",
    description: "Created a Space Biology Superhero Website which contains all information of space related fields and researches. ",
    demoLink: "https://harshitachhangani.github.io/spacebiologysuperhero.github.io/",
    sourceLink: "https://github.com/harshitachhangani/spacebiologysuperhero.github.io",
    imageSrc: space,
  },
];

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className='py-16 px-8 md:px-12 lg:px-28 max-w-screen-2xl mx-auto mb- items-center justify-center' id='projects'>
      
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-500 mb-6">Check out My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mt-8">
        {cardData.map((card) => (
          <div key={card.id} className="max-w-sm">
            <div
              className={`rounded overflow-hidden shadow-lg relative ${hoveredCard === card.id ? 'hover:bg-black hover:bg-opacity-100' : ''}`}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img className="w-full h-48 object-cover" src={card.imageSrc} alt={card.title} />

              {hoveredCard === card.id && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 text-white text-center p-4">
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-sm text-justify">{card.description}</p>
                  <div className="flex font-bold ">
                    <a href={card.demoLink} className="text-gradient hover:text-white  no-underline mr-4">View Demo</a>
                    <a href={card.sourceLink} className="text-gradient hover:text-white no-underline">View Source</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
