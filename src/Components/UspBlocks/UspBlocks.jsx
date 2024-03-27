import React from 'react'
import './UspBlocks.css'
import customer from '@assets/search-globe-svgrepo-com.svg'
import location from '@assets/location-pin-alt-1-svgrepo-com.svg'
import access from '@assets/always-hours-service-svgrepo-com.svg'
import offer from'@assets/offer-svgrepo-com.svg'
import accessories from '@assets/magic-wand-01-svgrepo-com.svg'


function UspBlocks() {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-3 brand-promo-container gap-3'>
    <div className='brand-promo-box text-center'>
        <h4>10000+</h4>
        <p>Happy Customers</p>
        <img src={customer} height='40px' alt="" />
    </div>
    <div className='brand-promo-box text-center'>
        <h4>100+ Locations</h4>
        <p>available 15+ states in India</p>
        <img src={location} height='40px' alt="" />
    </div>
    <div className='brand-promo-box text-center'>
        <h4>24/7 Access</h4>
        <p>Choose Favvorite Slots</p>
        <img src={access} height='40px' alt="" />
    </div>
    <div className='brand-promo-box text-center'>
        <h4>Welcome Offers</h4>
        <p> Get Free Acess Yo All Courts</p>
        <img src={offer} height='40px' alt="" />
    </div>
    <div className='brand-promo-box text-center'>
        <h4>Free And Rented Accessories</h4>
        <p> Happy Customers</p>
        <img src={accessories} height='30px' alt="" />
    </div>
    </div>
  )
}

export default UspBlocks