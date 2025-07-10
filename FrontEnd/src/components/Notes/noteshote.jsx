import imgEtoiles from '../../assets/etoiles.svg'
import './noteshote.css'

function Notes() {
   return (
      <div className="notes-container">
         {[...Array(5)].map((_, i) => (
            <img key={i} src={imgEtoiles} alt="note" className="note-icon" />
         ))}
      </div>
   )
}
export default Notes
