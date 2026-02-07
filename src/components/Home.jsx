import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';


const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText(() => text + name[ref.current - 1]);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [text]);


    return (
        <div className='area relative z-0 bg-black w-screen h-screen'>
            <Background />  {/* circles with 3D stars */}
            
            <motion.div 
				className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' 
				id='hero'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                      Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span>
                    </h1>
                    <p className='mt-3 text-xl'>I love to learn and build scalable and optimized frontend systems.</p>
                </div>      
            </motion.div>
            
            <Footer/>
        </div>  
    );
}


export default Home;
