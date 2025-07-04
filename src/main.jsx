import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Accueil from './pages/Accueil/Accueil.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './pages/APropos/apropos.jsx'
import Header from './components/Header/Header.jsx'
import Erreur from './pages/Erreur/Erreur.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/APropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
)
