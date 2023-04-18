import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" className='card--image'/>
        <div className='card--stats'>
            <img src="./public/images/star.png" alt="" className='card--star'/>
            <span>{props.rating}</span>
            <span className='gray'>  ({props.reviewCount}).</span>
            <span className='gray'>{props.location}</span>

        </div>
        <div>
        <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    </div>
  )
}

export default Card