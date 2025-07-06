import './Erreur.css'
import { Link } from 'react-router-dom'

function Erreur() {
   return (
      <div className="error-containeur">
         <h1 className="error-code"> 404 </h1>
         <p className="error-message">
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to="/" className="retour-accueil">
            Retourner sur la page d'Accueil
         </Link>
      </div>
   )
}

export default Erreur
