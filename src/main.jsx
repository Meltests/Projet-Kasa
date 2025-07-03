import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/Home/App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './pages/APropos'
import Header from './components/Header'
import Error from './components/Error/index.jsx'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/APropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
)
