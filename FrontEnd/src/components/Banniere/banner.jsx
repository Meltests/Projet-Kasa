import './Banniere.css'
import montagnes from '../../assets/montagnes.svg'

function Banniere({ image = montagnes }) {
   return (
      <div className="banniere">
         <img src={image} alt="bannière" className="banniere-image" />
      </div>
   )
}

export default Banniere
