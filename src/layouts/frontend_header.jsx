import React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TbLogin2, TbLogout } from "react-icons/tb";
import { PiShoppingCartThin, PiHeartThin } from "react-icons/pi";

const Frontend_header = () => {
   
  return (
    <>
          {/* login and register link */}
      <main className='border-b-[.001rem] border-gray-200'>
        <div className="py-2 flex justify-between items-center bg-base-100 container mx-auto">
          <div >
            <a className=" text-sm text-gray-500">WELCOME TO OUR SHOP!

            </a>
          </div>
          <div className='flex items-center gap-x-5'>

            <a href="" className='link link-hover text-base flex items-center gap-1 hover:text-[#388E3C]'><TbLogin2 />Login</a>
            <a href="" className='link link-hover flex items-center gap-1 hover:text-[#388E3C]'><TbLogout />
              Register</a>
          </div>
        </div>
      </main>
      {/* eng login and register link */}

      {/* header */}
      <header >
        <div className="navbar bg-base-100 container mx-auto py-5">
          <div className="flex-1">
            <a className="btn btn-ghost text-4xl">Ecommerce</a>
          </div>
          <div className='flex-1 '>
            <label className="input input-bordered  flex items-center gap-2 w-full">
              <input type="text" className="grow" placeholder="Search" />
              <button className='hover:opacity-100 opacity-70'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
            </label>
          </div>
          <div className="flex-1 flex justify-end">
            <ul className="menu menu-horizontal px-1">
              <li >

                <a >
                  <PiHeartThin className='text-3xl' />


                </a>

              </li>
              <li >

                <a className="indicator">
                  <span className="indicator-item badge bg-[#4CAF50] text-white">99+</span>
                  <PiShoppingCartThin className='text-3xl' />

                </a>

              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* end header */}

      {/* navbar */}
      <nav className='bg-[#4CAF50]'>
        <div className="navbar container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <select className="select rounded  focus:outline-none w-[15rem]" defaultValue={''}>
              <option value={''} disabled >All Categories</option>
              <option value={'x'}>Han Solo</option>
              <option value={'ss'}>Greedo</option>
            </select>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li><a className='text-white bg-black/10'>HOME</a></li>
              <li>
                <details>
                  <summary className='text-white '>ELECTRONICS</summary>
                  <ul className="p-2 z-[10] ">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className='text-white'>APPLIANCES</summary>
                  <ul className="p-2 z-[10]">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a className='text-white'>ABOUT US</a></li>
              <li><a className='text-white'>CONTACT US</a></li>
            </ul>
          </div>

        </div>
      </nav>
      {/* end navbar */}

        <Outlet/>
    </>
  )
}

export default Frontend_header
