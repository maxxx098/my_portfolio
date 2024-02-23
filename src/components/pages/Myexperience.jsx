import React, {  useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from './images/linkedin.png';
import img3 from './images/github.png';
import img7 from './images/arrow.png';
import { Data } from './Data';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ButtonRedirect from './ButtonRedirect';
import CV from './images/symon.pdf';
import Loader from './Loader';



export default function Myexperience() {

  const redirectToLinkedIn = () => {
   
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
  const redirectToGitHub = () => {
    
    window.open ('https://github.com/maxxx098', '_blank');
  };
  const [toggleStates, setToggleStates] = useState(1);

  const toggleTabs =(index) => {
    setToggleStates(index);
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
  ) :(
    <body>
          <section style={{marginBottom:'90px'}} id="profile">
          
      <div style={{marginTop:"70px"}} class="col-12 intro text-center">
        <h1  className='myheader'>MY EXPERIENCE</h1>
        
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
          <section  id='qualification' style={{marginBottom:'100px'}} className='qualification section'> 
    <h1 id="title">Qualification</h1>
   <p class="section__text__p1" style={{marginBottom:`30px`}}>My Personal Journey</p>
    
    <div className="qualification_container container">
      <div className="qualification_tabs">
        <div className={toggleStates === 1 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
        onClick={() => toggleTabs(1)}>
          <i className="uil uil-graduation-cap qualification_icon"></i> Education
        </div>

        <div className={toggleStates === 2 ? "qualification_button qualification_active button--flex" : "qualification_button  button--flex"}
        onClick={() => toggleTabs(2)}>
          <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
        </div>
      </div>
      <div className="qualification_sections">
        <div className={toggleStates === 1 ? "qualification_content qualification_content-active" : "qualification_content "}>
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Design</h3>
              <span className="qualification_subtitle">KODEGO - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">DATA ANALYST</h3>
              <span className="qualification_subtitle">Virtual Assist - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </div>
            </div>

            
          </div>


          <div className="qualification_data">
          <div>
              <h3 className="qualification_title">WEB DEV.</h3>
              <span className="qualification_subtitle">KODEGO - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">GAS</h3>
              <span className="qualification_subtitle">BNHS - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i> 2017 - 2023
              </div>
            </div>

            
          </div>
          <div className="qualification_data">
          <div>
              <h3 className="qualification_title">DATA ENTRY</h3>
              <span className="qualification_subtitle">Virtual Assist - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>
        </div>

        <div className={toggleStates === 2 ? "qualification_content qualification_content-active" : "qualification_content "}>
          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Design</h3>
              <span className="qualification_subtitle">Kodego - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2023 - present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">Data Analyst</h3>
              <span className="qualification_subtitle">SPL Data - Marketing</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2018 - Present
              </div>
            </div>
            

            
          </div>

          


          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Web Dev.</h3>
              <span className="qualification_subtitle">Kodego - Institute</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2023 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">Helper Mechanic</h3>
              <span className="qualification_subtitle">Two Brothers Shop</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2018 - Present
              </div>
            </div>
            

            
          </div>

          <div className="qualification_data">
            <div>
              <h3 className="qualification_title">Therapist</h3>
              <span className="qualification_subtitle">Unkown</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2016 - Present
              </div>
            </div>

            <div>
              <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
             
            </div>
          </div>

          <div className="qualification_data">
            <div></div>

            <div>
              <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              
            </div>

            <div>
              <h3 className="qualification_title">WordPress</h3>
              <span className="qualification_subtitle">K&M McLean Property Ltd</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>2023 - past
              </div>
            </div>
            

            
          </div>
          

          
        </div>
        
      </div>
    </div>
    <div style={{
      marginTop:'60px',
      columnGap:'40px'
    }} class="btn-container">
          <button
            class="btn btn-color-2" style={{ width: '150px'}}
            
          >
            Download CV
          </button>
          <button style={{ width: '150px'}} class="btn btn-color-1" >
      Contact
    </button>
          
        </div>
    <Link
      activeClass="active"
      to="experience"
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
      to="testimonial-page"
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
    <section id='testimonial-page' style={{marginBottom:"100px"}} className='testimonial container section'>
  <p class="section__text__p1">My Client Say</p>
      <h1 class="title">Testimonial</h1>

      <Swiper className="testimonial_container"   
       loop={true}
       grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        }}
        modules={[Pagination]}
        >
        {Data.map(({id,image, title, description}) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <img src={image} alt="" className='testimonial_img' style={{height:"100px"}}/>

              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
  </section>
    </body>
  )
}
