import Collapse from '../../components/Deroulant/collapse'
import CollapseAppartementData from '../../Data/collapseappartement'
import Tags from '../../components/tags/tagsappartement'
import Carousel from '../../components/Slider/carousel'
import AppartementHeader from '../../components/headerappart/appartementheader'
import HostInfo from '../../components/hostappartement/hostinfos'

function appartement() {
   return (
      <div>
         <Carousel />
         <div>
            <AppartementHeader />
            <HostInfo />
         </div>
         <Tags />
         <div>
            {CollapseAppartementData.map((item, index) => (
               <Collapse
                  key={index}
                  title={item.title}
                  paragraphe={item.description}
               />
            ))}
         </div>
      </div>
   )
}

export default appartement
