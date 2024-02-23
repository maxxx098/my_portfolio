import React, {  useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Result =() => {
    return(
      <p>Your message has been succesfully sent. I will contact you soon</p>
    );;
  }

function MyContact() {
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
    
  
  return (
   <section id='last'>
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

                    <a href="#" className="contact_button">Write me{""} <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
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

            <form ref={form} className="contact_form" onSubmit={sendEmail} >
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
  )
}

export default MyContact
