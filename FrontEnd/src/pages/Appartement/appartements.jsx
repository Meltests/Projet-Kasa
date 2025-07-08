import Collapse from '../../components/Deroulant/collapse'
import CollapseAppartementData from '../../Data/collapseappartement'
import Tags from '../../components/tags/tagsappartement'
import Carousel from '../../components/Slider/carousel'

function appartement() {
   return (
      <div>
         <Carousel />
         <Tags />
         <div style={{ width: '80%', margin: '0 auto' }}>
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
