import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-item'>
                <div className='f-section1'>
                    <h1 className='n-title'>EAT<span className='title-dot'>.</span></h1>
                    <p className='f-des'>A small produce box, packed the morning it's ordered. Currently delivering in six cities.</p>
                </div>
                <ul className='f-section2'>
                    <h3 className='f-sections-title'>Boxes</h3>
                    <li id='item'>This week's box</li>
                    <li id='item'>Build your own</li>
                    <li id='item'>Gift a box</li>
                </ul>
                <ul className='f-section3'>
                    <h3 className='f-sections-title'>Our growers</h3>
                    <li id='item'>Recipes</li>
                    <li id='item'>Careers</li>
                </ul>
                <ul className='f-section4'>
                    <h3 className='f-sections-title'>FAQ</h3>
                    <li id='item'>Manage subscription</li>
                    <li id='item'>Contact</li>
                </ul>
            </div>
            <hr className='f-hr'></hr>

            <div className='f-end-txt'>
                <p className='end-txt'>© 2026 EAT. All vegetables, no filler.</p>
                <p className='end-txt'>Made near the field, not the EAT .</p>
            </div>
        </div>
    )
}

export default Footer