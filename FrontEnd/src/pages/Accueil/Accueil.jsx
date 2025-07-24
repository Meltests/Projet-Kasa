import { useState, useEffect } from 'react'
import Banniere from '../../components/Banner/banner.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import montagnes from '../../assets/montagnes.svg'
import { getAppartements } from '../../Data/server'
import { Navigate } from 'react-router-dom'

function Accueil() {
   const [locationsState, setLocationsState] = useState(null)
   const [error, setError] = useState(false)

   useEffect(() => {
      getAppartements()
         .then((data) => setLocationsState(data))
         .catch(() => setError(true))
   }, [])

   if (error) return <Navigate to="/erreur" />
   if (!locationsState) return null

   return (
      <div className="banner-accueil">
         <Banniere image={montagnes} texte="Chez vous, partout et ailleurs" />
         <Cards locations={locationsState} />
      </div>
   )
}

export default Accueil
