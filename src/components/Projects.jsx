
import React from "react";
import gvp from '../assets/gvp.png'
import soc from '../assets/soc.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Gesture Video Player' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={gvp} alt="" />
            </a>}
            {title=='Stack Overflow Clone' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={soc} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Gesture Video Player',
        description:'Gesture Video Player is a dynamic frontend web application built using React and JavaScript. The project allows users to control video playback using intuitive gestures such as play, pause, forward, and rewind, providing a smooth and interactive viewing experience.',
        image: {gvp},
        git:'https://github.com/Suhailar/gesture-video-player.git',
        technologies:['ReactJS', 'JavaScript' , 'CSS3']
    },
    {
        title:'Stack Overflow Clone',
        description:'Stack Overflow Clone is a responsive web application built using React JS and Node. This project replicates the core functionality of Stack Overflow, allowing users to ask questions, answer them, and engage with the community.',
        image: {soc},
        git:"https://github.com/Suhailar/Stack-overflow.git",
        technologies:[ 'ReactJS', 'Node.js', 'MongoDB' ]
    }
]

export default Projects