import appartementData from '../../../../BackEnd/backend/data.json'
import './Tags.css'

function Tags() {
   const appartement = appartementData[0]

   return (
      <div className="tags-container">
         {appartement.tags.map((tag, index) => (
            <span key={index} className="tag">
               {tag}
            </span>
         ))}
      </div>
   )
}

export default Tags
