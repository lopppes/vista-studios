import React from 'react';
import '../hero/hero.css'

const Hero = () => {

return(

    <section className="pt-[42px] sm:pt-[80px] flex flex-col items-center mt-10">

    <p className="text-gradient">Unlimited</p>

    <h1 className="text-gradient" data-text="Digital Designer">Digital Designer</h1>

    <p className="text-[15px] pt-[42px] sm:text-[20px] mx-[32px] sm:mx-0 font-semibold max-w-[375px] text-[#FFFFFF]/70">Designers weave creativity and functionality into a seamless tapestry, crafting visual experiences that captivate and innovate.</p>

    <div className="mt-[52px] md:mt-[92px] flex lg:flex-row flex-col items-center justify-center xl:gap-x-[190px]">

      <div className="flex flex-col items-center lg:items-start gap-[42px] text-center lg:text-start">

        <h2 className="text-[34px] sm:text-[50px] mx-[32px] sm:mx-0 font-semibold max-w-[375px] text-white">The Art of Modern Design</h2>

        <p className="text-[#FFFFFF]/70 w-[320px] lg:w-[483px] leading-[170%] text-[18px] -mt-[12px] sm:mt-0">Designers are architects of visual stories, shaping narratives with creativity and precision.</p>

        <div class="flex space-x-4">

        
        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-8 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
       </span>
       <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Start Free</span>
      <span class="relative invisible">Start Free</span>
      </a>

     <a href="#_" class="flex items-center justify-center px-8 py-4 text-base font-medium leading-6 text-white whitespace-no-wrap bg-purple-500 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-purple-500 focus:outline-none">
Learn More
</a>
  </div>
      </div>

      <div className="banner-wrapper relative mt-10">
      <figure className="relative features-banner two mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow">

   <img src="./imgs/foguete.png" loading="lazy" alt="features image" width='800px'/>
</figure>

      </div>

    </div>

  
  </section>
)
}

export default Hero