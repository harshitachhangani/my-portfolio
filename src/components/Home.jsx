import React from 'react'

import pic from "../assets/imgs/ProfilePic.png";
import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
// import {fadeIn} from "../variants";

const Home = () => {
  return (
    <section className='min-h-[85vh] mt-32 lg:min-h-[78vh] flex items-center justify-center' id='home'>
        <div className='flex flex-col-reverse lg:flex-row lg:items-center md:justify-center lg:gap-x-12 '>
          {/* Left Section */}
          <div className='flex max-w-screen-md mx-auto flex-col flex-1 md:items-start md:justify-start text-center lg:text-left  md:w-3/4 '>
            <h1 className=' text-[30px] font-bold font-main leading-[1.2] lg:text-[40px]'>
              Harshita <span>Chhangani </span>
            </h1>
            <div className='mb-6 text-[30px] lg:text-[55px] font-bold uppercase leading-[-1]'>
              <span className='mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer !',
                2000,
                'Freelancer !',
                2000,
                'Designer !',
                2000,
              ]}
                speed={50}  
                className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'   
                wrapper='span'   
                repeat={Infinity}   

              />

            </div>
            <p className=' md:text-start  lg:px-0 px-8 mx-auto text-justify'>Hii I'm Harshita, a software developer specializing in web development arena. Comfortable with NodeJS and React Js and Python-Django and Java. Currently Learning App development using Flutter. Also have slight interest in Space technologies. Always looking forward to explore more in the field of coding.</p>
            <div className='flex items-center justify-center w-full md:justify-start gap-4 mt-4 '>
              <Link
                to="/Team" // Replace "/login" with the actual path to your login page
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 p-2 rounded-lg font-semibold transition-colors duration-300 no-underline " style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                Connect Me
              </Link>
              <a href="#" className='text-gradient text-bold no-underline '>View Resume</a>
            </div>

            <div className='flex items-center justify-center w-full md:justify-start gap-4 mt-4 '>
  <a href="">
    <FaGithub className='text-black text-2xl hover:text-gray-600' />
  </a>
  <a href="">
    <FaLinkedin className='text-blue-600 text-2xl hover:text-blue-800' />
  </a>
  <a href="">
    <FaInstagram className='text-pink-500 text-2xl hover:text-pink-700' />
  </a>
</div>
          </div>
          {/* Right */}
          <div className='flex items-center justify-center py-8'>
            <img className='rounded-full w-64 h-64 object-cover' src={pic} alt="My Image" />
          </div>
        </div>

    </section>




  )
}

export default Home