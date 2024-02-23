import React, {  useRef, useState, useEffect } from "react";
import { Link } from 'react-scroll';
import img2 from './images/linkedin.png';
import img3 from './images/github.png';
import emailjs from '@emailjs/browser';
import Loader from "./Loader";
import CV from './images/symon.pdf';

const Result =() => {
  return(
    <p>Your message has been succesfully sent. I will contact you soon</p>
  );;
}

function Contact() {

  const redirectToLinkedIn = () => {
   
    window.open('https://www.linkedin.com/in/symon-falcatan-49a0082b2/', '_blank');
  };
  const redirectToGitHub = () => {
    
    window.open ('https://github.com/maxxx098', '_blank');
  };
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
  const inputEmail = event.target.value;
  setEmail(inputEmail);

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setIsValidEmail(emailRegex.test(inputEmail)
  );
  
};
  
  const [ result,showResult] = useState(false);
  const form = useRef();
 
  const sendEmail = (e) => {
      
    e.preventDefault();
    
    if (isValidEmail) {
      // Process the email (e.g., send it to a server, etc.)
      console.log('Valid email:', email);
    } else {
      console.log('Invalid email. Please enter a valid email address.');
    }
  
    emailjs
      .sendForm('service_bs8bk9l', 'template_fz1zgmn', form.current, {
        publicKey: 'EguKC-u4Dv6HShuIo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )

      e.target.reset();
      showResult(true)
  };

  setTimeout(() =>{
    showResult(false)
  }, 7000)

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
  return  isLoading ? (
    <Loader />
  ) : (
    <body>
      
   
    <section id='profile'>
    <div style={{marginTop:"70px"}} class="col-12 intro text-center">
   
   <h1 className="myheader">CONTACT ME!</h1>
   <span></span>
   <p style={{fontStyle:''}}>Frontend Developer</p>
   <div class="btn-container">
   <a download="" href={CV}>< button class="btn btn-color-2" style={{ width: '150px'}}>Download CV</button></a>
     <Link
      activeClass="active"
      to="contacts"
      spy={true}
      smooth={true}
      offset={-20} // Adjust this offset based on your layout
      duration={500}
    >
       <button  href="#contacts" style={{ width: '150px'}} className="btn btn-color-1" >
 Contact Info
</button>
    </Link>
    
     
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
  <section style={{marginTop:`30px`}} id="contacts">
    <p class="section__text__p1">Get In Touch</p>
    <h1 class="title">Contact Me</h1>

    <div className="contact_container container grid">
        <div className="contact_content">
            <h3 className="contact_title">Talk to me</h3>

            <div className="contact_info">
                <div className="contact_card">
                    <i className="bx bx-mail-send contact_card-icon"></i>

                    <h3 className="contact_card-title">Email</h3>
                    <span className="contact_card-data">symonfalcatan@gmail.com</span>

                    <a href="mailto:simmonswalker79@gmail.com" className="contact_button">Write me {""} <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>

                <div className="contact_card">
                    <i className="bx bxl-whatsapp contact_card-icon"></i>

                    <h3 className="contact_card-title">Instagram</h3>
                    <span className="contact_card-data">Maxx Sassy</span>

                    <a href="" className="contact_button">Write me{""} <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>

                <div className="contact_card">
                    <i className="bx bxl-messenger contact_card-icon"></i>

                    <h3 className="contact_card-title">Messenger</h3>
                    <span className="contact_card-data">Symon Falcatan</span>

                    <a href="https://www.messenger.com/t/4045049098843100" className="contact_button">Write me {""} <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>
            </div>
        </div>

        <div className="contact_content">
            <h3 className="contact_title">Write me your project</h3>

            <form ref={form} className="contact_form" onSubmit={sendEmail}>
                <div className="contact_form-div">
                    <label  className="contact_form-tag">Name</label>
                    <input type="text"
                           name='name' 
                           className="contact_form-input" 
                           placeholder='Insert your name'
                           required/>
                </div>
                <div className="contact_form-div">
                    <label  className="contact_form-tag">Mail</label>
                    <input type="email"
                           name='email' 
                           className="contact_form-input" 
                           placeholder='Insert your email'
                           onChange={handleEmailChange}
                           required/>
                </div>

                <div className="contact_form-div contact_form-area">
                    <label  className="contact_form-tag">Project</label>
                    <textarea name="project"  cols="30" rows="10" className='contact_form-input'
                    placeholder='Write your project'
                    required></textarea>
                </div>

             <div className="btn-container">
             <button style={{width:`20rem`}} className='btn btn-color-1'>Send Message
             
             </button>
           
             </div>
             {!isValidEmail && <p style={{ color: 'red',textAlign:`center` }}>Please enter a valid email address.</p>}
             <div style={{textAlign:`center`}}>
               {result ? <Result/> : null }
             </div>
            </form>
        </div>
    </div>
   </section>
   <section style={{height:'30vh'}}>
    
   </section>
  </body>
  )
}

export default Contact
