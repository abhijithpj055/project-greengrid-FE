import React from 'react'
import search from '@assets/search-globe-svgrepo-com.svg'
import book from '@assets/book01.png'
import play from '@assets/play03.png'
import './Blocks.css'

function Blocks() {
  return (
   <> <div className='d-flex flex-column flex-md-row justify-content-center w-100 h-50 mt-3 home-box-2'>

        <div  className='d-flex flex-column  align-items-center text-break p-3 text-center'>

            <img src={search} alt="" />
            <h3>Search</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>

        <div  className='d-flex flex-column align-items-center text-break p-3 text-center'>

        <img src={book} alt="" />
        <h3>Book</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

         </div>



        <div  className='d-flex flex-column  align-items-center text-break p-3 text-center'>

            <img src={play} alt="" />
            <h3>Play</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>


    </div>
    </>
  )
}

export default Blocks