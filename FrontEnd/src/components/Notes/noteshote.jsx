import imgEtoiles from '../../assets/etoiles.svg'
import imgEtoilegris from '../../assets/etoilegris.svg'
import './noteshote.css'

function Notes({ score }) {
   const etoiles = [1, 2, 3, 4, 5]
   return (
      <div className="notes-container">
         {etoiles.map((niveau) =>
            score >= niveau ? (
               <img key={niveau} src={imgEtoiles} />
            ) : (
               <img key={niveau} src={imgEtoilegris} />
            ),
         )}
      </div>
   )
}
export default Notes
