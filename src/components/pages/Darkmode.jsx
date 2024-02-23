import React from 'react'

export default function Darkmode() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('dark-theme', "dark");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('dark-theme', "dark");
    }
    const toggleTheme = (e) => {
       if (e.target.checked) setDarkMode();
       else setLightMode()
    }
  return (
    <div className=''>
      <input 
      className='dark_mode_input' 
      type="checkbox"
      id='darkmode_toggle'
      onChange={toggleTheme} />
      <label className='dark_mode_label' for='darkmode-toggle'>

      </label>
    </div>
  )
}
