import { useState } from 'react'
import './Collapse.css'
import arrowIcon from '../../assets/arrow.svg'

function Collapse(props) {
   const [toggle, setToggle] = useState(false)
   const toggleState = () => {
      setToggle(!toggle)
   }
   console.log(toggle)
   return (
      <div>
         <div className="collapse">
            <div className="collapse-titre">
               <span>{props.title}</span>
               <img
                  src={arrowIcon}
                  alt="arrow icon"
                  className={toggle ? 'arrow arrow-rotation' : 'arrow '}
                  onClick={toggleState}
               />
            </div>
            <div>
               <p aria-hidden={toggle ? 'true' : 'false'}>{props.paragraphe}</p>
            </div>
         </div>
      </div>
   )
}

export default Collapse
