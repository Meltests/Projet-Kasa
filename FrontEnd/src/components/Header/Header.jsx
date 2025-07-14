import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import Logoaccueil from '../../assets/logo.svg'

function Header() {
   return (
      <nav className="Header-containeur">
         <Link to="/">
            <img src={Logoaccueil} alt="Logo de Kasa" className="Header-logo" />
         </Link>
         <div className="Header-liens">
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive ? 'liens active' : 'liens'
               }
               end
            >
               Accueil
            </NavLink>
            <NavLink
               to="/APropos"
               className={({ isActive }) =>
                  isActive ? 'liens active' : 'liens'
               }
            >
               A Propos
            </NavLink>
         </div>
      </nav>
   )
}

export default Header
