import Imgtest from '../../assets/montagnes.svg'
import './hostinfos.css'

function HostInfo() {
   return (
      <div className="host-container">
         <p> Alexandre Dumas </p>
         <img src={Imgtest} alt="image test" />
      </div>
   )
}

export default HostInfo
