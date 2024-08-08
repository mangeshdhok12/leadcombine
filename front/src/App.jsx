import React from 'react'

  
import LeadForm from './LeadForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LeadLists from './LeadLists'
import EditLeads from './EditLeads'
import Home from './Home'

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Home/>
      <Routes>

        <Route path='/leads' element={ <LeadForm/>}/>
        <Route path='/' element={ <LeadLists/>}/>
        <Route path='/getleadsbyid/:id' element={ <EditLeads/>}/>
      </Routes>
      </BrowserRouter>

     
    </div>
  )
}

export default App
