import Collapse from '../../components/Deroulant/collapse'
import Tags from '../../components/tags/tagsappartement'
import Carousel from '../../components/Slider/carousel'
import AppartementHeader from '../../components/headerappart/appartementheader'
import HostInfo from '../../components/hostappartement/hostinfos'
import './appartement.css'
import Notes from '../../components/Notes/noteshote'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAppartementsById } from '../../Data/server'

function Appartement() {
   const { id } = useParams()
   const [currentAppartement, setCurrentAppartement] = useState(null)
   const [error, setError] = useState(false)

   useEffect(() => {
      getAppartementsById(id)
         .then((data) => setCurrentAppartement(data))
         .catch(() => setError(true))
   }, [id])

   if (error) return <Navigate to="/erreur" />

   if (!currentAppartement) return null

   return (
      <div>
         <Carousel pictures={currentAppartement.pictures} />
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
               <Notes score={currentAppartement.rating} />
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
                  title="Équipements"
                  liste={currentAppartement.equipments}
               />
            </div>
         </div>
      </div>
   )
}

export default Appartement
