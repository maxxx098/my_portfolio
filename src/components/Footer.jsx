import React from 'react'

function Footer() {
  return (
 
    <footer className='footer'>
      <div className="footer_container container">
        <h1 className="footer_title">David</h1>

        <div className="footers_list">
          <li>
            <a href="#"  className="footer_link">About</a>
          </li>
          <li>
            <a href="#"  className="footer_link">Projects</a>
          </li>
          <li>
            <a href="#"  className="footer_link">Contact</a>
          </li>
          
            
        </div>

        <div className="footer_social">
          <a  className="footer_social-link">
            <i className="bx bxl-facebook"></i>
          </a>

          <a  className="footer_social-link">
            <i className="bx bxl-instagram"></i>
          </a>

          <a className="footer_social-link">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className='footer_copy'>&#169; MaxxSassy. All rigths reserved</span>
      </div>
    </footer>
  
  )
}

export default Footer
