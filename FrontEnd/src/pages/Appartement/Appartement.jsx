import Collapse from '../../components/Deroulant/collapse'
import CollapseAppartementData from '../../../../BackEnd/backend/data.json'
import Tags from '../../components/tags/tagsappartement'
import Carousel from '../../components/Slider/carousel'
import AppartementHeader from '../../components/headerappart/appartementheader'
import HostInfo from '../../components/hostappartement/hostinfos'
import './appartement.css'
import Notes from '../../components/Notes/noteshote'
import { useParams } from 'react-router-dom'

function Appartement() {
   const { id } = useParams()
   const currentAppartement = CollapseAppartementData.find(
      (item) => item.id == id,
   )

   return (
      <div>
         <Carousel />
         <div className="Header-appart-container">
            <div className="container-infosapart">
               <AppartementHeader
                  title={currentAppartement.title}
                  location={currentAppartement.location}
               />
               <Tags tags={currentAppartement.tags} />
            </div>
            <div className="container-hote">
               <HostInfo
                  name={currentAppartement.host.name}
                  picture={currentAppartement.host.picture}
               />

               <Notes />
            </div>
         </div>
         <div className="collapse-appart">
            <div className="collapse-description">
               <Collapse
                  title="Description"
                  paragraphe={currentAppartement.description}
               />
            </div>
            <div className="collapse-equipement">
               <Collapse
                  title="Equipement"
                  liste={currentAppartement.equipments}
               />
            </div>
         </div>
      </div>
   )
}

export default Appartement
