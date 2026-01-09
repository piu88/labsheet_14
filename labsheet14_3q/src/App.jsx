import { useState } from 'react'
import AppRoute from './AppRoute'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
  
<Router>
  
     <nav>
    <Link to="/">Home</Link>
            <Link to="/about">About</Link>
 </nav>

  <AppRoute/>
   </Router>
 

  )

}

export default App
