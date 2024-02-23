import React from 'react'
import './index.css' 


function Services() {
  return (
   <section style={{height:'auto'}} className='services section' id='services'>
   
      <h1 class="title">Services</h1>
      <span className='section_subtitile' style={{textAlign:"center"}}>What I offer?</span>

      <div className="servcices_container container grid">
        <div className="services_content">
            <div>
                <i className="uil uil services_icon">
                    <h3 className="services_title">Product <br /> Designer</h3>
                </i>
            </div>

            <span className="services_button">View More {''} <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className="servcies_modal">
                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close"></i>

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
                <i className="uil uil services_icon">
                    <h3 className="services_title">Product <br /> Designer</h3>
                </i>
            </div>

            <span className="services_button">View More{''} <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className="servcies_modal">
                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close"></i>

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
                <i className="uil uil services_icon">
                    <h3 className="services_title">Product <br /> Designer</h3>
                </i>
            </div>

            <span className="services_button">View More {''} <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className="servcies_modal">
                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close"></i>

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
      </div>
   </section>
  )
}

export default Services
