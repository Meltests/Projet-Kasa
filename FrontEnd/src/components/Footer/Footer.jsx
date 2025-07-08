import './Footer.css'
import logoblanc from '../../assets/logoblanc.svg'

function Footer() {
   return (
      <footer className="footer-banniere">
         <img src={logoblanc} alt="Logo de Kasa" className="footer-logo" />
         <p className="footer-texte">© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer
