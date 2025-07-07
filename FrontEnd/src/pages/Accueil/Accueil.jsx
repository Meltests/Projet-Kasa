import { useState } from 'react'
import Banniere from '../../components/Banniere/banner.jsx'
import Cards from '../../components/Cards/Cartes.jsx'
import locations from '../../Data/listecards.js'
import montagnes from '../../assets/montagnes.svg'

function Accueil() {
   const [locationsState] = useState(locations)

   return (
      <div>
         <Banniere image={montagnes} texte="Chez vous, partout et ailleurs" />
         <Cards locations={locationsState} />
      </div>
   )
}

export default Accueil
