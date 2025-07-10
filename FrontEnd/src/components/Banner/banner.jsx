import './Banniere.css'
import PropTypes from 'prop-types'

function Banniere({ image, texte }) {
   return (
      <div className="banniere">
         <img src={image} alt="bannière" className="banniere-image" />
         {texte && <div className="banniere-texte">{texte}</div>}
      </div>
   )
}

Banniere.propTypes = {
   image: PropTypes.string,
   texte: PropTypes.string,
}

export default Banniere
