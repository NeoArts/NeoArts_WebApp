import React from 'react'
import neoarts from '../../images/neoarts-logo.svg'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'

function Footer( {translator} ) {

  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
        <footer id="footer" className="footer">
            <div className="skewed-section-dark"></div>
            <div className="footer__container h-container v-container">
                <img src={neoarts} alt="NeoArts logo" className="footer__brand" />
                {/* <Menu className="m-auto" /> */}
                <div className="footer__social">
                    <a target={"_blank"} href="https://www.facebook.com/profile.php?id=100085049985882" className="footer__social-link">
                        <FaFacebookF size="36px" className="footer__social-icon" />
                    </a>
                    <a target={"_blank"} href="https://www.instagram.com/neoarts.co/" className="footer__social-link">
                        <FaInstagram size="36px" className="footer__social-icon" />
                    </a>
                    <a target={"_blank"} href="https://www.linkedin.com/company/neoarts/" className="footer__social-link">
                        <FaLinkedinIn size="36px" className="footer__social-icon" />
                    </a>
                    <a target={"_blank"} href="https://wa.me/573105746050" className="footer__social-link">
                        <FaWhatsapp size="36px" className="footer__social-icon" />
                    </a>
                </div>
                <p className="footer__copyright"><span>&copy;</span> {year} {translator.getTranslation("All rights reserved")}. NeoArts</p>
            </div>
        </footer>
    )
}

export default Footer
