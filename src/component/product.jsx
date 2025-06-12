import React from 'react'
import './product.css'

const Product = ({ btn, img, name,sum }) => {
    return (
        <div className='AllProduct'>
            <button>{btn}</button><br />
            <img style={{ width: "250px" }} src={img} alt="" />
            <h3>{name}</h3>
            <div>
                <h4>{sum} <span style={{marginLeft:"20px",fontSize:"10px"}}>₹4999.00</span></h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sz">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
        </div>
    )
}

export default Product