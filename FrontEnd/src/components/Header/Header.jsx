import { Link } from 'react-router-dom'
import './Header.css'
import Logoaccueil from '../../assets/logo.svg'

function Header() {
   return (
      <nav className="Header-containeur">
         <Link to="/">
            <img src={Logoaccueil} alt="Logo de Kasa" className="Header-logo" />
         </Link>
         <div className="Header-liens">
            <Link to="/" className="liens">
               Accueil
            </Link>
            <Link to="/APropos/" className="liens">
               A Propos
            </Link>
         </div>
      </nav>
   )
}

export default Header
