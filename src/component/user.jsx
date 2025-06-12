import React from 'react'
import './user.css'
import imgUs from '#/User.png'
import imgUs2 from '#/statik.jpg'

const User = () => {
  return (
    <div className='infoUser'>
        <div>
            <img src={imgUs} style={{width:"200px",marginTop:"10px"}} alt="" />
        </div>
        <div>
            <h1>Meythli odex</h1>
            <img src={imgUs2} alt="" />
            <p style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default User