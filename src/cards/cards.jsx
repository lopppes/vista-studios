import React from 'react';
import './cards.css'

const Cards = () => {
  const aboutItems = [
    {
      title: 'Automated Routing',
      image: '../imgs/holographic-cloud.png',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sed modi culpa mollitia sint earum laboriosam sequi.',
    },
    {
      title: 'Automation Lock',
      image: '../imgs/holographic-lock.png',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sed modi culpa mollitia sint earum laboriosam sequi.',
    },
    {
      title: 'Custom Profiles',
      image: '../imgs/holographic-contacts-icon.png',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sed modi culpa mollitia sint earum laboriosam sequi.',
    },
    {
      title: 'Accessible Values',
      image: '../imgs/holographic-dollar-coin-2.png',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sed modi culpa mollitia sint earum laboriosam sequi.',
    },
  ];

  return (

    <section className="section about" id="about">
        <h2 className="text-[34px] sm:text-[50px] mx-[32px] sm:mx-0 font-semibold text-white items-center lg:my-[100px] text-center mb-14">What We Do</h2>
      <div className="container">

        <ul className="about-list">
          {aboutItems.map((item, index) => (
            <li key={index}>
              <div className={`about-card about-card-${index + 1}`}>
                <figure className="card-banner mb-4">
                <img src={item.image} style={{ maxWidth: '60%', height: '60%' }} loading="lazy" alt={item.title}/>

                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#_" className="card-title">
                      {item.title}
                    </a>
                  </h3>

                  <p className="card-text">{item.text}</p>

                  <a href="#_" className="btn-link">
                    <span className="span">Learn More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="section-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque sapiente,   
          <a href="https://github.com/lopppes" target='blanck' className="btn-link">
            <span className="span ml-1">Github Lopppes</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </p>
      </div>
    </section>


  );
};


export default Cards;
