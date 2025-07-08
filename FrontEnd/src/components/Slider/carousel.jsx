import './Carousel.css'
import imgexemple from '../../assets/montagnes.svg'
import arrowleft from '../../assets/arrowleft.svg'
import arrowright from '../../assets/arrowright.svg'

function Carousel() {
   return (
      <div className="carousel-container">
         <div className="slide">
            <img src={imgexemple} alt="exempleslider" />
            <img src={arrowleft} alt="arrow left" className=" arrow-left" />
            <img src={arrowright} alt="arrow right" className="  arrow-right" />
         </div>
      </div>
   )
}

export default Carousel
