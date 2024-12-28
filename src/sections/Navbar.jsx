import { useState } from 'react';
import { navLinks } from '../constants/index';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a 
          href={item.href} 
          className="text-slate-300 hover:text-white transition-colors px-3 py-1.5" 
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent h-[120%] blur-[1px]"></div>
      
      <div className="relative bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-sm shadow-lg border-b border-slate-700/50 h-14">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-b from-transparent to-slate-900/50 rounded-t-[100%]"></div>
        
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex justify-between items-center h-full mx-auto c-space">
            <a 
              href="/" 
              onClick={scrollToTop}
              className="text-slate-300 font-bold text-xl hover:text-white transition-colors relative z-10"
            >
              <img src="/icono/logo.png" alt="logo" className="w-10 h-10"/>
            </a>

            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none sm:hidden flex relative z-10"
              aria-label="Toggle menu">
              <img src={isOpen ? 'menu/close.png' : 'menu/modo_hamburge.png'} alt="toggle" className="w-6 h-6" />
            </button>

            <nav className="sm:flex hidden relative z-10">
              <NavItems />
            </nav>
          </div>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col h-full">
          <NavItems onClick={toggleMenu}/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;