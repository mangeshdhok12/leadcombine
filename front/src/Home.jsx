import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


const Home = () => {
  return (
    <nav className="nav-bar">
    <h1><Link to='/'>Lead Application</Link></h1>
    <Link to="/leads" className="create-lead-button">Create New Lead</Link>
  </nav>
  
  )
}

export default Home
