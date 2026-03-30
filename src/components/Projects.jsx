import React from "react";
import gvp from '../assets/gvp.png'
import soc from '../assets/soc.png'

const ProjectCard = ({ image, title, description, git, demo, technologies }) => (
<div className="max-w-sm bg-[#1d1836] rounded-2xl shadow-lg overflow-hidden border border-white/5">
<div className="relative group">
  <img src={image} alt={title} className="w-full h-56 object-cover
      transform transition-transform duration-500
      group-hover:scale-105"
      />

<div className="absolute inset-0
    bg-transparent
    opacity-0 group-hover:opacity-100
    transition-all duration-300
    flex items-center justify-center"
>
  <a href={demo} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5
      rounded-full
      bg-transparent/0          // ← 0% opacity
      border-2 border-black/20
      backdrop-blur-sm
      text-black font-semibold text-sm
      drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
      hover:border-black/40
      hover:scale-[1.02]
      transition-all duration-300"
  >
    Visit Project
  </a>
</div>
</div>


    <div className="p-6">
      <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
        {title}
      </h5>
      <p className="mt-2 text-sm md:text-base text-gray-300"> {description} </p>
    </div>

    <div className="m-4 flex justify-between items-end">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tag, i) => (
          <p key={i} className="text-[14px] text-blue-400"> #{tag} </p>
        ))}
      </div>

      <a href={git} target="_blank" rel="noopener noreferrer"
        className="text-red-300 border border-gray-500 rounded-lg px-4 py-2 hover:text-green-400 hover:border-green-400 duration-300" >GitHub</a>
    </div>
  </div>
);




  
const Projects = () => {
    return (
        <div className="bg-black ">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        // links={item.links}
                        git={item.git}
                        demo={item.demo}
                        technologies={item.technologies}
                    />
                ))}
            </div>
        </div>
    );
}


export const project = [
    {
        title:'Gesture Video Player',
        description:'Gesture Video Player is a dynamic frontend web application built using React and JavaScript. The project allows users to control video playback using intuitive gestures such as play, pause, forward, and rewind, providing a smooth and interactive viewing experience.',
        image: gvp,
        git:'https://github.com/Suhailar/gesture-video-player.git',
        demo: "https://gesture-video-player.netlify.app/",
        technologies:['ReactJS', 'JavaScript' , 'CSS3']
    },
    {
        title:'Stack Overflow Clone',
        description:'Stack Overflow Clone is a responsive web application built using React JS and Node. This project replicates the core functionality of Stack Overflow, allowing users to ask questions, answer them, and engage with the community.',
        image: soc,
        git:"https://github.com/Suhailar/Stack-overflow.git",
        demo: "https://stack-overflow-sar.netlify.app/",
        technologies:[ 'ReactJS', 'Node.js', 'MongoDB' ]
    }
]

export default Projects

