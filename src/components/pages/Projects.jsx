import React from 'react'
import img2 from './images/linkedin.png';
import img3 from './images/github.png';
import 'swiper/css';
import 'swiper/css/pagination';
import img9 from './images/project-1.png';
import img11 from './images/project-extend.png';
import img12 from './images/project-2.png';
import img13 from './images/project-2-extend.png';
import img14 from './images/project-3.png';
import img15 from './images/project-3-extend.png';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import ButtonRedirect from './ButtonRedirect';
import CV from './images/symon.pdf';

const redirectToWebsite = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'https://shairapenserga.github.io/alotan/?fbclid=IwAR0hhrACULL3yswjLRy8V8j3DoCjHN2aV0vqjmQ--XqIhJdBe-p-tg1i3Qk';
  };

  const redirectToMyWebsite = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'https://github.com/maxxx098';
  };
  const redirectToMyOwnWebsite = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'https://maxxx098.github.io/Portfolio/portfolio/';
  };
  const redirectToMyHotel = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'http://villashotelcaps.honeyqueenibedev.com/';
  };
  const redirectToLinkedIn = () => {
   
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
  const redirectToGitHub = () => {
    
    window.open ('https://github.com/maxxx098', '_blank');
  };

 
function Projects() {

   // loader state
   const [isLoading, setIsLoading] = useState(true);

   // Let create async method to fetch fake data
   useEffect(() => {
     const fakeDataFetch = () => {
       setTimeout(() => {
         setIsLoading(false);
       }, 4000);
     };
 
     fakeDataFetch();
   }, []);

  return isLoading ? (
    <Loader />
  ) :  (
    <body>
         <section id='profile'>
         <div style={{marginTop:"70px"}} class="col-12 intro text-center">
        
        <h1 className='myheader'>MY PROJECTS</h1>
        <span>as a</span>
        <p style={{fontStyle:''}}>Frontend Developer</p>
        <div class="btn-container">
          <a download="" href={CV}>< button class="btn btn-color-2" style={{ width: '150px'}}>Download CV</button></a>
         
          <ButtonRedirect   destination="/contact" >Contact Info</ButtonRedirect>
          
        </div>
        <div id="socials-container">
          <img
            src={img2}
            alt="My LinkedIn profile"
            class="icon"
            onClick={redirectToLinkedIn}
          />
          <img
            src={img3}
            alt="My Github profile"
            class="icon"
            onClick={redirectToGitHub}
          />
        </div>
      </div>
        <div class="custom-shape-divider-bottom-1708001793">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
        </section>
        <section style={{marginTop:'70px'}} id="projects">
         <p class="section__text__p1">Browse My Recent</p>
             <h1 class="title">Projects</h1>
                <div class="experience-details-container">
                     <div class="about-containers">
                         <div class="details-container color-container">
                             <div class="article-container">
                                <img
                                    src={img9}
                                    alt="Project 1"
                                    class="project-img"
                                />
                                <img
                                    src={img11}
                                    alt="Project 1"
                                    class="project-img"
                                />
                             </div>
                                <h2 class="experience-sub-title project-title">Project One</h2>
                                    <div class="btn-container">
                                        <button
                                            class="btn btn-color-2 project-btn"
                                            onClick={redirectToMyWebsite}
                                        >
                                            Github
                                        </button>
                                        <button
                                            class="btn btn-color-2 project-btn"
                                            onClick={redirectToWebsite}
                                        >
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                                <div class="details-container color-container">
                                    <div class="article-container">
                                    <img
                                        src={img12}
                                        alt="Project 2"
                                        class="project-img"
                                    />
                                    <img
                                        src={img13}
                                        alt="Project 2"
                                        class="project-img"
                                    />
                                    </div>
                                    <h2 class="experience-sub-title project-title">Project Two</h2>
                                    <div class="btn-container">
                                    <button
                                        class="btn btn-color-2 project-btn"
                                        onClick={redirectToMyWebsite}
                                    >
                                        Github
                                    </button>
                                    <button
                                        class="btn btn-color-2 project-btn"
                                        onClick={redirectToMyOwnWebsite}
                                    >
                                        Live Demo
                                    </button>
                                    </div>
                                </div>
                                <div class="details-container color-container">
                                    <div class="article-container">
                                    <img
                                        src={img14}
                                        alt="Project 3"
                                        class="project-img"
                                    />
                                    <img
                                        src={img15}
                                        alt="Project 3"
                                        class="project-img"
                                    />
                                    </div>
                                    <h2 class="experience-sub-title project-title">Project Three</h2>
                                    <div class="btn-container">
                                    <button
                                        class="btn btn-color-2 project-btn"
                                        onClick={redirectToMyWebsite}
                                    >
                                        Github
                                    </button>
                                    <button
                                        class="btn btn-color-2 project-btn"
                                    onClick={redirectToMyHotel}
                                    >
                                        Live Demo
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
      
    </section>
    <section>
    <p class="section__text__p1">Portfolio</p>
      <h1 class="title"> About My Projects</h1>
    </section>
   
    </body>
  )
}

export default Projects
