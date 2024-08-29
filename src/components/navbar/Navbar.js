import React from 'react';
import Logo from "./logo.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "container dark" : "container"}>
      <div className='navbar--brand'>
        <img src={Logo} alt='logo--image' className='logo' />
        <h1 className={props.darkMode ? "logo--brand-dark" : "logo--brand"}>ReactFacts</h1>
      </div>
      <div className='toggler'>
        <span className='toggler-light'>Light</span>
        <div className='toggler--slider' onClick={props.togglerDarkMode}>
          <div className='toggler--slider--circle'>
            <i className={props.darkMode ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"}></i>
          </div>
        </div>
        <span className='toggler-dark'>Dark</span>
      </div>
    </nav>
  );
}
