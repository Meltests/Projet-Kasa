import { useState } from 'react'
import Banniere from '../../components/Banniere/banner.jsx'
import Cards from '../../components/Cards/Cartes.jsx'
import locations from '../../Data/listecards.js'

function Accueil() {
   const [locationsState] = useState(locations)

   return (
      <div>
         <Banniere />
         <Cards locations={locationsState} />
      </div>
   )
}

export default Accueil
