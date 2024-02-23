import React from 'react'
import { useEffect, useState } from 'react'
const BackToTopButton = () => {
  const [BackToTopButton, setBackToTopButton] =useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth",
 })
  }
  return (
    <div>
      {BackToTopButton && (
        <button style={{
         
          color: "white",
          position:"fixed",
          borderRadius:'10%',
          bottom:"50px",
          right:"50px",
          zIndex:"1000",
          width:"40px",
          height:"40px",
          border:"none",
        fontSize:"20px",
        backgroundColor:" #282c34",
        animation:"bounceInRight",
        animationDuration:"1s"
        }}
        onClick={scrollUp}
        ><i style={{fontSize:'1rem'}} class="fa-solid fa-plane fa-rotate-270"></i></button>
      )}
    </div>
  )
}

export default BackToTopButton