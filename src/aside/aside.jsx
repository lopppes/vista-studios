import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value, isVisible }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let interval;

    if (isVisible && animatedValue < value) {
      interval = setInterval(() => {
        setAnimatedValue((prevValue) => Math.min(prevValue + 1, value));
      }, 4); 
    }

    return () => clearInterval(interval);
  }, [animatedValue, value, isVisible]);

  return (
    <strong className="font-semibold text-[31.64px] sm:text-[40.89px] text-[#ab51ff]">
      +{animatedValue.toLocaleString()} 
    </strong>
  );
};

const Aside = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <ul ref={componentRef} className="xl:scale-100  flex flex-col lg:flex-row items-center justify-between sm:my-[42px] lg:my-[80px] gap-y-[12px] sm:gap-0 p-10">
      <li className="flex items-center gap-[10px] sm:gap-[18px]">
        <AnimatedNumber value={250} isVisible={isVisible} />
        <span className="text-[15px] sm:text-[20.45px] text-[#ffffff]">MINUTES OF CLASSES</span>
      </li>

      <li className="hidden sm:block text-[#fff]">|</li>

      <li className="flex items-center gap-[10px] sm:gap-[18px]">
        <AnimatedNumber value={120} isVisible={isVisible} />
        <span className="text-[15px] sm:text-[20.45px] text-[#ffffff]">USES PER MINUTE</span>
      </li>

      <li className="hidden sm:block text-[#fff]">|</li>

      <li className="flex items-center gap-[10px] sm:gap-[18px]">
        <AnimatedNumber value={180} isVisible={isVisible} />
        <span className="text-[15px] sm:text-[20.45px] text-[#ffffff]">FAST EXPORT</span>
      </li>
    </ul>

    
  );
};

export default Aside;
