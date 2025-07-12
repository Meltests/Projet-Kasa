import './hostinfos.css'

function HostInfo({ name, picture }) {
   return (
      <div className="host-container">
         <p> {name} </p>
         <img src={picture} alt="image hôte" />
      </div>
   )
}

export default HostInfo
