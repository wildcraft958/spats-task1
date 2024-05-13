import React from 'react'
import Image from 'next/image'

const intro = {
  blog: {
    border: "1px solid #333",
    padding: "1rem",
    margin: "1rem 1rem",
    display: 'flex',
    background:"rgb(0.3,0.4,0.2,0.5)" ,
    boxShadow: "0 0 10px #333",
  },
  img:{
    border:'1px solid #333',
  }
};

function Intro() {
  return (
    <div style={intro.blog}>
      <div className="img" style={{ position: 'relative', width: '90%', height: '50vh'}}>
        <Image className="imagelan" src='/introo.webp' alt='intro image' layout='fill' objectFit='contain' />
      </div>
      <div style={{margin:"3rem", gap:'4rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{fontSize:"3rem", color:'dark-cyan', fontFamily:"monospace"}}>Welcome to my Blogpost</h1>
        <p style={{fontSize:"1.25rem"}}>Our blog is a collection of articles and resources on a variety of topics, including cooking, travel, and personal development. Whether you're looking for delicious recipes, travel tips, or inspiration to live your best life, you'll find it here.</p>
      </div>
    </div>
  )
}

export default Intro