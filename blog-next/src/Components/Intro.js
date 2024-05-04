import React from 'react'
import Image from 'next/image'

function Intro() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
      <Image src='/intro.webp' alt='intro image' layout='fill' objectFit='cover' />
    </div>
  )
}

export default Intro