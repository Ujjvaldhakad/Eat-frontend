'use client'
import Link from 'next/link'
import React from 'react'
import { ShoppingBag, Wishlist } from './Icons'


const Navbar = () => {


    return (
        <div className='main-header'>
            <nav className='navbar'>
                <h1 className='n-title'>EAT</h1>
                <div className='nav-links'>
                    <Link href="#" className='nav-item'><ShoppingBag /></Link>
                    <Link href="#" className='nav-item'><Wishlist /></Link>

                    <div className="dropdown">
                        <button className="dropbtn">Dropdown Menu</button>
                        <div className="dropdown-content">
                            <Link href="#">Link 1</Link>
                            <Link href="#">Link 2</Link>
                            <Link href="#">Link 3</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='header-hero'>
                <p className='header-p1'> Farm to board, same day</p>
                <h1 className='header-title'>Cooked today.</h1>
                <h1 className='header-title-2'>Picked <span className='header-title'>today.</span></h1>
                <p className='header-description'>Seasonal vegetables and a chef's plan, boxed at dawn and on your board before dinner. No cold storage, no <br />shortcuts.</p>
            </div>
        </div>
    )
}

export default Navbar