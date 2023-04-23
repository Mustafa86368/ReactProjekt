import React from 'react'
import memesData from '../memesData'

export const Meme = () => {

let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber =Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
     alert(url)
        
    }




  return (
    <main>
<form action="" className='form'>
    <input type="text" placeholder="Top text" className='form--input' />
    <input type="text" placeholder="Bottom text" className='form--input' />
   
</form>
<button className='form--button'
onClick={getMemeImage}
>
    Get a new meme image 🖼
</button>

</main>
  )
}
