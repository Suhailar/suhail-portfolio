import React from 'react';
import '../index.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black w-full min-h-full py-12'>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Suhail Ahamed, a 2022 graduate🎓 with a passion for crafting robust frontend systems and captivating web applications. As a seasoned 
              <a className='text-green-300 hover:text-green-500 duration-300' 
              href='https://www.linkedin.com/in/suhail-ahamed-r-myprofile' 
              target='_blank' rel="noreferrer">Software developer</a> I specialize in MERN stacks🚀.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences through engaging blogs on 
              <a className=' text-purple-300 hover:text-purple-400 duration-300' 
              href="https://github.com/Suhailar" 
              target='_blank' rel="noreferrer"> GitHub</a>, where I delve into the intricacies of software development and technology trends.
              On a different note, I enjoy going to the gym 💪🏼 and staying physically active. I’m also passionate about traveling 🗺️ and mountain climbing 🏔️, as exploring new places gives me fresh perspectives and keeps me motivated.</p>
            <ButtonLink
              url='https://drive.google.com/file/d/1X-1_6Kcs_4cDO64LkTWuSxGK20tNX45U/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;



