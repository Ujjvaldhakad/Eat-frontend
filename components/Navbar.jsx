"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {


    const [ShowNavs, setShowNavs] = useState(false);


    return (
        <div>
            {/* desktop view */}
            <nav className='w-full bg-purple-200 nav center'>
                <h1 className='nav-title'>E-COM</h1>
                <div className="nav-tabs flex" >
                    <Link className='nav-item' href="#">Category</Link>
                    <Link className='nav-item' href="#">Address</Link>
                    <Link className='nav-item' href="#">About</Link>
                    <Link className='nav-item' href="#">Contact</Link>
                    <Link className='nav-item' href="#">Cart</Link>
                    <Link className='nav-item' href="#">Login</Link>
                </div>

                <div className="nav-center">
                    <input className='nav-searchbar' placeholder='Search product' />
                    <button className='nav-search-icon '><FaSearch className='n-s-i' /></button>
                </div>
            </nav>


            {/* tablet , ipad view */}
            <nav className='w-full bg-purple-200 tab-nav center'>

                <h1 className='m-nav-title'>E-COM</h1>
                <div className="mobile-nav-center">
                    <input className='tab-nav-searchbar ' placeholder='Search product' type='text' />
                    <button className='mobile-nav-search-icon '><FaSearch className='n-s-i' /></button>
                </div>
                <div className={`tab-nav-tabs flex  ${ShowNavs ? "active" : ""}`} >
                    <Link className='nav-item' href="#">Cart</Link>
                    <Link className='nav-item' href="#">Login</Link>
                    <button
                        onClick={() => setShowNavs(!ShowNavs)}
                        className="mobile-nav-btn"
                    >
                        <FaBars className="center mobile-nav-icon" />
                    </button>

                    <div
                        className={`nav-tabs ${ShowNavs ? "mobile-nav-active" : ""}`}
                    >
                        <h3 className='nav-title'>E-SHOP</h3>
                        <Link className='nav-item' href="#">About</Link>
                        <Link className='nav-item' href="#">Contact</Link>
                        <Link className='nav-item' href="#">Category</Link>
                        <Link className='nav-item' href="#">Address</Link>
                    </div>
                </div>
            </nav >


            {/* mobile view */}
            <nav className='w-full bg-purple-200 mobile-nav center'>
                <div className='m-upper-side'>
                    <h1 className='m-nav-title'>E-COM</h1>
                    <div className={`mobile-nav-tabs flex  ${ShowNavs ? "active" : ""}`} >
                        <Link className='nav-item' href="#">Cart</Link>
                        <Link className='nav-item' href="#">Login</Link>
                        <button
                            onClick={() => setShowNavs(!ShowNavs)}
                            className="mobile-nav-btn"
                        >
                            <FaBars className="center mobile-nav-icon" />
                        </button>

                        <div
                            className={`nav-tabs ${ShowNavs ? "mobile-nav-active" : ""}`}
                        >
                            <h3 className='nav-title'>E-SHOP</h3>
                            <Link className='nav-item' href="#">About</Link>
                            <Link className='nav-item' href="#">Contact</Link>
                            <Link className='nav-item' href="#">Category</Link>
                            <Link className='nav-item' href="#">Address</Link>
                        </div>

                    </div>
                </div>
                <div className="mobile-nav-center">
                    <input className='mobile-nav-searchbar' placeholder='Search product' />
                    <button className='mobile-nav-search-icon '><FaSearch className='n-s-i' /></button>
                </div>
            </nav >
        </div >
    )
}

export default Navbar