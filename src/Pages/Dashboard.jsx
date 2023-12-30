import Sidenav from '../components/Sidenav'
import{useState} from 'react'
import React from 'react'

function Dashboard() {
  const [isClose,setIsClose] = useState(true)
   const handleClose =() => {
    setIsClose(false)
   }  

  return (
    <div>
     
      <div className='flex gap-5 pt-3 ml-5'>
      <div className='w-[300px] h-[200px] bg-sky-700 rounded pt-20 text-4xl text-white text-center'>Courses</div>
      <div className='w-[300px] h-[200px] bg-purple-500 rounded  pt-20 text-4xl text-white text-center'>Employee</div>
      <div className='w-[300px] h-[200px] bg-blue-600 rounded  pt-20 text-4xl text-white text-center'>Classes</div>

      </div>
      </div>
  )
}

export default Dashboard
