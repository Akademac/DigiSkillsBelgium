import footerLogo from '../assets/icons/footer_logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__div">
        <div>
          <img src={footerLogo} alt="Footer Logo" className='footer__logo'/>
        </div>
        <div className='footerLi__left'>
          <ul>
            <li>Menu</li>
            <li>Training Match</li>
            <li>Digital Initiatives</li>
            <li>Inspiring Stories</li>
            <li>Our Mission</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='footerLi__right'>
        <ul>
            <li>Andere links</li>
            <li>Login</li>
            <li>Become a digital partner</li>
            <li>My uQ Skills test</li>
          </ul>
        </div>
        <div className='footer__square footer__square_one'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='footer__square'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="under__footer">
          <p>@ Digiskillsbelgium 2021</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer;