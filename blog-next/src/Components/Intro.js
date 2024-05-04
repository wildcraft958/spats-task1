import React from 'react'
import Image from 'next/image'

function Intro() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{ position: 'relative', width: '80%', height: '50vh'}}>
        <Image src='/intro.webp' alt='intro image' layout='fill' objectFit='cover' />
      </div>
      <div style={{margin:"1rem"}}>
        <h1>WELCOME to our Blog</h1>
        <p>Our blog is a collection of articles and resources on a variety of topics, including cooking, travel, and personal development. Whether you're looking for delicious recipes, travel tips, or inspiration to live your best life, you'll find it here.</p>
      </div>
    </div>
  )
}

export default Intro