import Collapse from '../../components/Deroulant/collapse'
import CollapseAppartementData from '../../../../BackEnd/backend/data.json'
import Tags from '../../components/tags/tagsappartement'
import Carousel from '../../components/Slider/carousel'
import AppartementHeader from '../../components/headerappart/appartementheader'
import HostInfo from '../../components/hostappartement/hostinfos'
import './appartement.css'
import Notes from '../../components/Notes/noteshote'

function appartement() {
   return (
      <div>
         <Carousel />

         <div className="Header-appart-container">
            <div className="container-infosapart">
               <AppartementHeader />
               <Tags />
            </div>
            <div className="container-hote">
               <HostInfo />
               <Notes />
            </div>
         </div>
         <div className="collapse-appart">
            {CollapseAppartementData.map((item, index) => (
               <Collapse
                  key={index}
                  title="Description"
                  paragraphe=" item.description"
               />
            ))}
         </div>
      </div>
   )
}

export default appartement
