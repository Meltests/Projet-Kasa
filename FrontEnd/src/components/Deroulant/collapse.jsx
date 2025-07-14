import { useState } from 'react'
import './Collapse.css'
import arrowIcon from '../../assets/arrow.svg'

function Collapse({ title, paragraphe, liste }) {
   const [toggle, setToggle] = useState(false)
   const toggleState = () => {
      setToggle(!toggle)
   }

   return (
      <div>
         <div className="collapse">
            <div className="collapse-titre">
               <span>{title}</span>
               <img
                  src={arrowIcon}
                  alt="arrow icon"
                  className={'arrow' + (toggle ? ' arrow-rotation' : '')}
                  onClick={toggleState}
               />
            </div>

            <div
               className={
                  'collapse-body' + (toggle ? ' collapse-body-open' : '')
               }
            >
               {paragraphe && (
                  <p aria-hidden={toggle ? true : false}>{paragraphe}</p>
               )}

               {liste &&
                  liste.map((item, index) => (
                     <div key={'liste-' + index}>{item}</div>
                  ))}
            </div>
         </div>
      </div>
   )
}

export default Collapse
