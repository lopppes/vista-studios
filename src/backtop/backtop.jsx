import React, { useEffect, useState } from 'react';
import './backtop.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 90);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      <a href="#top" className={`back-top-btn ${isVisible ? 'active' : ''}`} aria-label="back to top" onClick={scrollToTop}>
      
        <img src="./imgs/top.png" alt="Scroll to Top Icon" />
      </a>
    </>
  );
};

export default ScrollToTopButton;
