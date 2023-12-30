import React from 'react'
import {NavLink } from 'react-router-dom'
import { useState } from 'react'
function Sidenav({children}) {
  const[isOpen , setIsOpen] =useState(false)

  const  handleIsOpen =() => {
    setIsOpen(true)
   }
   const  handleClose =() => {
    setIsOpen(false)
   }
  return (
    <div>
  <div style={{width: isOpen === true ? "100px" : ""}} className='w-[25%] h-screen fixed overflow-hidden bg-purple-700 boder-r-2 border-gray-300'>   
<i onClick={handleIsOpen} class="fa-solid fa-xmark text-white text-4xl ml-[300px] mt-2" ></i>
<i onClick={handleClose}  style={{display:isOpen === true ?"block" : "none"}} class="fa-solid fa-bars text-4xl text-black  ml-[45px] mb-[45px] -mt-8 hidden"></i>

<div style={{display:isOpen === true ? "none" : "flex" }} className='ml-12 mt-10 text-2xl flex flex-col gap-12 text-white transition-all  duration-1000'>
<NavLink to={"/"}  className='cursor-pointer text-red-600 hover:underline'><i class="fa-brands fa-microsoft text-black"></i> Dashboard</NavLink>
<NavLink to={"/product"} className='cursor-pointer hover:underline'><i class="fa-brands fa-product-hunt"></i> Product</NavLink>
<NavLink to={"/service"} className='cursor-pointer hover:underline'><i class="fa-solid fa-bag-shopping"></i> Service</NavLink>
<NavLink to={"/parent"} className='cursor-pointer hover:underline'><i class="fa-solid fa-image-portrait"></i> Parent</NavLink>
<NavLink to={"/attendence"} className='cursor-pointer hover:underline'><i class="fa-solid fa-table-cells"></i> Attendence</NavLink>
<NavLink to={"/help"} className='cursor-pointer hover:underline text-black'><i class="fa-solid fa-headphones text-white"></i> Help</NavLink>
    </div>
    <div style={{display : isOpen === true ? "flex" : "none"}} className='ml-10 mt-10 flex-col text-3xl gap-12 hidden'>
   <i class="fa-brands fa-microsoft text-white"></i>
   <i class="fa-brands fa-product-hunt  text-white"></i> 
   <i class="fa-solid fa-bag-shopping  text-white"></i> 
   <i class="fa-solid fa-image-portrait  text-white"></i> 
   <i class="fa-solid fa-table-cells  text-white"></i>
   <i class="fa-solid fa-headphones text-black"></i>
   </div>
   </div>
  
<div  style={{marginLeft: isOpen === true ? "100px" : "" }} id="main" className='ml-[27%] transition-all duration-500'>
  {children}
</div>

    </div>
  )
}
export default Sidenav
