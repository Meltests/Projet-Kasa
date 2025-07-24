import './Carousel.css'
import arrowleft from '../../assets/arrowleft.svg'
import arrowright from '../../assets/arrowright.svg'
import { useState } from 'react'

function Carousel({ pictures }) {
   const [currentPicture, setCurrentPicture] = useState(0)

   const goToNext = () => {
      setCurrentPicture((nextPicture) =>
         nextPicture === pictures.length - 1 ? 0 : nextPicture + 1,
      )
   }

   const goToPrevious = () => {
      setCurrentPicture((prevPicture) =>
         prevPicture === 0 ? pictures.length - 1 : prevPicture - 1,
      )
   }

   return (
      <div className="carousel-container">
         <div className="slide">
            <img
               src={pictures[currentPicture]}
               alt={"photo de l'apartement"}
               className="carousel-image"
            />
            {pictures.length > 1 && (
               <>
                  <img
                     src={arrowleft}
                     alt="arrow left"
                     className="arrow-left"
                     onClick={goToPrevious}
                  />
                  <img
                     src={arrowright}
                     alt="arrow right"
                     className="arrow-right"
                     onClick={goToNext}
                  />
               </>
            )}
         </div>
         {pictures.length > 1 && (
            <div className="numerotation">
               {currentPicture + 1} / {pictures.length}
            </div>
         )}
      </div>
   )
}

export default Carousel
