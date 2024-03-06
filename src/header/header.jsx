import React, { useState, useEffect } from 'react';
import './header.css';

  const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    const scrollPercentage = Math.min((scrollY / (documentHeight - windowHeight)) * 100, 100);

    requestAnimationFrame(() => {
      setScrollPosition(scrollPercentage);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

   <>
    <header className="fixed top-0 pt-5 pb-5 w-full left-0 px-6 z-50 bg-blur items-center">
      <nav className="border-gray-200 px-4 lg:px-6 items-center">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl relative">

          <a href="#_" className="flex items-center">
            <img src="./imgs/icons8-unicorn-100.png" className="mr-3 h-12 sm:h-15" alt="Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Vista Studios
            </span>
          </a>

          {/* hamburger icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
       
            <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Home</a>
                </li>

                <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Modern</a>
                </li>

                <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Catalog</a>
                </li>
                
              
          </div>

          {/* menu items */}
          <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-85 z-50 transition-transform ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
            id="mobile-menu">
            <div className="flex items-center justify-center h-full">
              <button onClick={closeMenu} className="absolute top-6 right-10 text-white focus:outline-none">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <ul className="flex flex-col mt-4 font-medium space-y-4">
              <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Home</a>
                </li>
             
                <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Modern</a>
                </li>
                <li>
                  <a href="#_"
                    className="block py-2 px-4 text-white rounded bg-primary-700 hover:text-purple-400 transition-all duration-300"
                    aria-current="page">Catalog</a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
       {/* gradient bar */}
       <div
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            width: `${scrollPosition}%`,
            transition: 'width 0.3s ease',
            bottom: 0,
            zIndex: 40,
          }}
        ></div>

      
</header>
    </>
  );
};

export default Header;
