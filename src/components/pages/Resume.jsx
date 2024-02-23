import React, { useEffect } from 'react'
import { useState } from 'react';
import img2 from './images/linkedin.png';
import img3 from './images/github.png';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import  WorkItems from './WorkItems';
import Loader from './Loader';
import ButtonRedirect from './ButtonRedirect';
import CV from './images/symon.pdf';
function Resume() {

  const redirectToLinkedIn = () => {
   
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
  const redirectToGitHub = () => {
    
    window.open ('https://github.com/maxxx098', '_blank');
  };

  const[item, setItem] = useState({name: "all"});
  const [projects, setProjects] =useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all") {
      setProjects(projectsData);
    }

    else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent});
    setActive(index);
  };

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
  ) :(
    <body>
         <section id='profile'>
         <div style={{marginTop:"70px"}} class="col-12 intro text-center">
        
       <h1 className='myheader'>MY RESUME</h1>
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
        <section style={{marginTop:`60px`}} className='work section' id='portfolio'>
        <p class="section__text__p1">Portfolio</p>
      <h1 class="title">Most Recent Works</h1>

      <div className="work_filters">
        {projectsNav.map((item, index) =>{
          return <span onClick={(e) => {
            handleClick(e, index);
          }} className={`${active === index ? 'active-work' : ""} work_item`} key={index}>
            {item.name}</span>;
          
        })}
      </div>

      <div className="work_container grid">
         {projects.map((item) => {
          return <WorkItems item={item} key={item.id}/>;
         })}
      </div>
        </section>
    </body>
  )
}

export default Resume
