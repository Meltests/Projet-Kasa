import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
   return (
      <nav className="Header-containeur">
         <Link to="/" className="Header-link">
            Accueil
         </Link>
         <Link to="/APropos/" className="Header-link">
            A Propos
         </Link>
      </nav>
   )
}

export default Header
