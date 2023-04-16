import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <img src="./src/assets/kahve.png" alt="" />
        <div className='card--stats'>
            <img src="./src/assets/star.png" alt="" />
            <span>5.0</span>
            <span> (6) .</span>
            <span>USA</span>

        </div>
        <div>
        <p>Life Lessons with Katie Zaferes</p>
            <p>From $136</p>
        </div>
    </div>
  )
}

export default Card