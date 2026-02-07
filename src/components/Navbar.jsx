import React, { useState ,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';

const GlassNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="group relative isolate inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold transition duration-300 text-sky-300 hover:text-sky-200"
  >
    {/* TEXT */}
    <span className="relative z-10">{children}</span>

    {/* Glass base */}
    <span
      className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-0 transition duration-300
      group-hover:opacity-100 bg-white/5 backdrop-blur-md border border-white/15"
    />

    {/* Specular highlight */}
    <span
      className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100
      bg-[radial-gradient(70%_120%_at_75%_10%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.10)_35%,rgba(255,255,255,0)_70%)]"
    />

    {/* Rim light */}
    <span
      className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100
      bg-[linear-gradient(135deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_35%,rgba(255,255,255,0)_65%,rgba(255,255,255,0.35))]
      mix-blend-screen"
    />
  </Link>
);


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between">
        
        <div className="hidden sm:flex space-x-2 items-center text-sm">
  <GlassNavLink to="/">Home</GlassNavLink>
  <GlassNavLink to="/about">About</GlassNavLink>
</div>


        

        <div className="text-3xl sm:text-2xl font-extrabold">
  <a
    href="/"
    className="inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
  >
    Suhail Ahamed R
  </a>
</div>


        <div className="hidden sm:flex space-x-2 items-center text-sm">
  <GlassNavLink to="/projects">Projects</GlassNavLink>
  <GlassNavLink to="/experience">Experience</GlassNavLink>
  <GlassNavLink to="/contact">Contact</GlassNavLink>
</div>


        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu}>Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
