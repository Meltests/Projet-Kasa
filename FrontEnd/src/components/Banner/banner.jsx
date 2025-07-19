import './Banniere.css'

function Banniere({ image, texte }) {
   return (
      <div className="banniere">
         <img src={image} alt="bannière" className="banniere-image" />
         {texte && <div className="banniere-texte">{texte}</div>}
      </div>
   )
}

export default Banniere
