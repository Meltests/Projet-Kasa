import './appartementheader.css'

function AppartementHeader({ title, location }) {
   return (
      <div className="apart-container">
         <h1> {title} </h1>
         <p> {location} </p>
      </div>
   )
}

export default AppartementHeader
