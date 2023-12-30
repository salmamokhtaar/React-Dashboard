import React from 'react'
import  {Routes , Route} from 'react-router-dom'
import Sidenav from './components/Sidenav'
import DashboardPage from './Pages/Dashboard'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Parent from './Pages/Parent'
import Attendence from './Pages/Attendence'
import Help from './Pages/Help'
import Dashboard from './Pages/Dashboard'

function App() {
  return ( 
    <Sidenav>
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/product" element={<Product />} />
       <Route path="/service" element={<Service />} />
       <Route path="/parent" element={<Parent />} />
       <Route path="/Attendence" element={<Attendence />} />
       <Route path="/help" element={<Help />} />
  </Routes>
  </Sidenav>
    
  )
}

export default App
