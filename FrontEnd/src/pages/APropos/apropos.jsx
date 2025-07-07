import { useState } from 'react'
import Collapse from '../../components/Deroulant/collapse'
import CollapseData from '../../Data/collapsedata'
import imgapropos from '../../assets/imgapropos.svg'
import Banniere from '../../components/Banniere/banner.jsx'

function Apropos() {
   const [collapseItems] = useState(CollapseData)

   return (
      <div>
         <div>
            <Banniere image={imgapropos} />
            <Collapse datacollapse={collapseItems} />
         </div>
      </div>
   )
}

export default Apropos
