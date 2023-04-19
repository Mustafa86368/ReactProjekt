import React from 'react'

const Card = (props) => {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} alt="" className='card--image'/>
        <div className='card--stats'>
            <img src="./public/images/star.png" alt="" className='card--star'/>
            <span>{props.item.stats.rating}</span>
            <span className='gray'>  ({props.item.stats.reviewCount}).</span>
            <span className='gray'>{props.item.location}</span>

        </div>
        <div>
        <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    </div>
  )
}

export default Card