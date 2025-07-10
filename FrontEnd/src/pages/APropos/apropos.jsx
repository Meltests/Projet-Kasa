import Collapse from '../../components/Deroulant/collapse'
import CollapseData from '../../Data/collapsedata'
import imgapropos from '../../assets/imgapropos.svg'
import Banniere from '../../components/Banner/banner.jsx'

function Apropos() {
   return (
      <div>
         <div>
            <Banniere image={imgapropos} />
            {CollapseData.map((element, id) => (
               <Collapse
                  key={id}
                  title={element.title}
                  paragraphe={element.description}
               />
            ))}
         </div>
      </div>
   )
}

export default Apropos
