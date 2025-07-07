import './Collapse.css'
import PropTypes from 'prop-types'

function Collapse({ datacollapse }) {
   return (
      <div>
         {datacollapse.map(({ title }, index) => (
            <div key={index} className="collapse">
               <div className="collapse-titre">
                  <span>{title}</span>
                  <span className="arrow">▲</span>
               </div>
            </div>
         ))}
      </div>
   )
}

Collapse.propTypes = {
   datacollapse: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string.isRequired,
      }),
   ).isRequired,
}

export default Collapse
