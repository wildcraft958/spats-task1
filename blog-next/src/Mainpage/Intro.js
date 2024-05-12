import React from 'react'
import Image from 'next/image'

const intro = {
  blog: {
    border: "1px solid #333",
    padding: "1rem",
    margin: "1rem 1rem",
    display: 'flex',
  },
};

function Intro() {
  return (
    <div style={intro.blog}>
      <div style={{ position: 'relative', width: '90%', height: '50vh'}}>
        <Image src='/intro.webp' alt='intro image' layout='fill' objectFit='cover' />
      </div>
      <div style={{margin:"1rem"}}>
        <h1 style={{textAlign:"center"}}>WELCOME to our Blog</h1>
        <p>Our blog is a collection of articles and resources on a variety of topics, including cooking, travel, and personal development. Whether you're looking for delicious recipes, travel tips, or inspiration to live your best life, you'll find it here.</p>
      </div>
    </div>
  )
}

export default Intro