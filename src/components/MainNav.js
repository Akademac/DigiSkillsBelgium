import mainLogo from "../assets/icons/main_logo.png";
import arrowDown from "../assets/icons/arrow_down.png";
import logIn_btn from "../assets/icons/logIn_btn.png";

import { useState } from "react";

const MainNav = () => {
  let [hiddenLangue, setHiddenLangue] = useState(true);
  let [langue, setLangue] = useState('BE');
  let [langueActive, setLangueActive] = useState('EN');

  let handleHiddenLangue = () => {
    setHiddenLangue(!hiddenLangue);
  }

  let handleLangue = () => {
    if(langue === 'BE') {
      setLangue('EN');
      setLangueActive('BE');
    }
    else if(langue === 'EN') {
      setLangue('BE');
      setLangueActive('EN');
    }
  }

  return (
    <div className="main__nav">
      <img src={mainLogo} alt="Logo" className="main__logo" onClick={() => window.location.reload()}/>
      <ul className="mainNav__nav">
        <li>Training Match</li>
        <li>Digital Initiatives</li>
        <li>Inspiring Stories</li>
        <li>Our Mission</li>
        <li>Contact</li>
      </ul>
      <div className="login__div">
        <span></span>
        <div className="login">
          <div className="login__btn">
            <img src={logIn_btn} alt="Login btn" className="logIn__btn" />
          </div>
          <p>Become a digital partner</p>
        </div>
        <span></span>
        <span className="language">
          <p>{langueActive}</p>
          <img src={arrowDown} alt="Arrow Down" onClick={handleHiddenLangue}/>
        </span>
        <div className="hiddenLangue__div" style={hiddenLangue ? {display: 'none'}: {display: 'flex'}} onClick={handleLangue}>{langue}</div>
      </div>
    </div>
  );
};

export default MainNav;
