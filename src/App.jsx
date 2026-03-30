// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Experience from './components/Experience';
// import About from './components/About';
// import Contact from './components/Contact';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

// const App = () => {
//   return (
    
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/experience' element={<Experience />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//       <Footer />
      
//     </>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col"> {/* Add this div */}
      <Navbar />
      <main className="flex-1 pt-16"> {/* Add main tag with padding for navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;