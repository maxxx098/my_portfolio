
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import CV from './images/symon.pdf';
import Resume from'./images/symon.pdf';
import img1 from './images/sy.jpg';
import img2 from './images/linkedin.png';
import img3 from './images/github.png';
import img4 from './images/about-pic.png';
import img7 from './images/arrow.png';
import Contact from './MyContact';
import ButtonRedirect from './ButtonRedirect';
import Loader from './Loader';



function About() {
  const redirectToLinkedIn = () => {
   
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
  const redirectToGitHub = () => {
    
    window.open ('https://github.com/maxxx098', '_blank');
  };
     
  const [toggleState, setToggleState] = useState(0);

  const toggleTab =(index) => {
    setToggleState(index);
  }
  const scrollToSection = () => {
    const sectionElement = document.getElementById("experience"); 
      if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      };

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
  ) : (
    <body>
    <section  id="profile" style={{height:`auto`, marginBottom:`15rem`}}>
   
      <div  class="section__pic-container">
        <img style={{ borderRadius:`50%`, width:`400px`}} src={img1} alt="John Doe profile picture" />
      </div>
      <div  class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Symon Falcatan</h1>
        <p class="section__text__p2" style={{fontSize:`20px`}}>Frontend Developer</p>
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
    <section  id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="about_container container grid">
     
        <img
          src={img4}
          alt="Profile picture"
          
          class="about_img"
        />
    <div className='about_data'>
     <div className="about_info grid">
      <div className="about_box">
        <i class='bx bx-award about_icon'></i>
        <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">4+ Month's Working</span>
       
      </div>

      <div className="about_box">
      <i class='bx bx-briefcase-alt about_icon'></i>
        <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">10 + Projects</span>
        
      </div>

      <div className="about_box">
      <i class='bx bx-support about_icon'></i>
        <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24 | 7</span>
       
      </div>
     </div>
     <p className='about_description'>Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>
     
     <Link
      activeClass="active"
      to="last"
      spy={true}
      smooth={true}
      offset={-20} // Adjust this offset based on your layout
      duration={500}
    >
      <button style={{width:'200px'}} className='btn btn-color-1'>Hire Me?</button>
    </Link>
     </div>
    </div>
    <img
      src={img7}
      alt="Arrow icon"
      class="icon arrow"
      onClick={scrollToSection}
    />
  </section>
  
  
    <section id="experience" style={{marginTop:'90px',marginBottom:"80px"}}>
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div className="skills_container container grid">
        <div className="skills_content">
          <h3 className="skills_title">Frontend Developer</h3>

          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Bootstrap</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Git</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">React</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_level">basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills_content">
          <h3 className="skills_title">Backend Developer</h3>

          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">PHP</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Node JS</h3>
                  <span className="skills_level">Basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Python</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">MySQL</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Firebase</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">SQL</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="skills_content">
          <h3 className="skills_title">Data Analyst</h3>

          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">EXEL</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">LinkedIn</h3>
                  <span className="skills_level">Basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Trello</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">UpWork</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills_name">Apollio.io</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <Link
      activeClass="active"
      to="services"
      spy={true}
      smooth={true}
      offset={-70} // Adjust this offset based on your layout
      duration={500}
    >
      <img
        src={img7}
        alt="Arrow icon"
        class="icon arrow"
        
      />
    </Link>
    </section>
   
    <section style={{marginBottom:'85px'}} className='services section' id='services'>
    <p class="section__text__p1">What I Offer?</p>
   <h1 class="title">Services</h1>
   

   <div className="services_container container grid">
     <div className="services_content">
         <div>
             <i className="uil uil-web-grid services_icon">
                 <h3 className="services_title">Data Entry | Analyst</h3>
                 
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Product Designer</h3>
                 <p className="services_modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
     <div className="services_content">
         <div>
             <i className="uil uil-arrow services_icon">
                 <h3 className="services_title">Ui | Ux Designer <br /> Design</h3>
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Ui/Ux Designer</h3>
                 <p className="services_modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
     <div className="services_content">
         <div>
             <i className="uil uil-edit services_icon">
                 <h3 className="services_title">Frontend Developer</h3>
             </i>
         </div>

         <span className="services_button" onClick={() => toggleTab(3)}>View More  <i className="uil uil-arrow-right services_button-icon"></i></span>

         <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
             <div className="services_modal-content">
                 <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                 <h3 className="services_modal-title">Frontend Developer</h3>
                 <p className="services_modal-description">Service with more than 4 month's of experience.Providing quality work to clients and companies.
</p>

<ul className="services_modal-services grid">
 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>

 <li className="services_modal-service">
     <i className="uil uil-check-circle services_modal-icon"></i>
     <p className="services_modal-info">I develop the user interface.</p>
 </li>
</ul>
             </div>
         </div>
     </div>
   </div>
   
   <div  style={{marginTop:'30px'}} class="btn-container">
          <a download="" href={Resume}>< button class="btn btn-color-2" style={{ width: '150px'}}>Resume</button></a>
         
          <Link
      activeClass="active"
      to="last"
      spy={true}
      smooth={true}
      offset={-25} // Adjust this offset based on your layout
      duration={500}
    >
      <button style={{width:'150px'}} className='btn btn-color-1'>Hire Me?</button>
    </Link>
          
        </div>
        <Link
      activeClass="active"
      to="last"
      spy={true}
      smooth={true}
      offset={-20} // Adjust this offset based on your layout
      duration={500}
    >
      <img
        src={img7}
        alt="Arrow icon"
        class="icon arrow"
        
      />
    </Link>
        
</section>
    
    <Contact/>
    
  </body>
  )
}

export default About
