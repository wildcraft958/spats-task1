"use client"
import React, { useState } from 'react'
import Button from './Button'
import Blog from './Blog'
import Intro from './Intro'
import Navbar from './Navbar'
import './Landing.css'


function Landing() {
   const blogs = [
        {
          title: "The Art of Cooking",
          content: "Cooking is an art that requires patience, creativity, and skill. Whether you're a beginner or an experienced chef, there's always something new to learn in the kitchen. In this blog, we'll explore different cooking techniques, share delicious recipes, and discuss the latest culinary trends.",
        },
        {
          title: "Exploring Nature's Wonders",
          content: "Nature is full of wonders waiting to be explored. From majestic mountains to serene beaches, there's beauty everywhere you look. Join us on a journey through some of the world's most breathtaking landscapes, and discover the magic of the great outdoors.",
        },
        {
          title: "The Power of Positive Thinking",
          content: "Positive thinking has the power to transform your life. By adopting a positive mindset, you can overcome obstacles, achieve your goals, and live a happier, more fulfilling life. In this blog, we'll share tips and strategies for cultivating positivity and embracing the power of optimism.",
        }
      ];
      const [isLandingPage, setIsLandingPage] = useState(true);
        const handleCLick = () => {
            setIsLandingPage(false)
        }
        const handleLogin = () => {
            console.log('Login')
        }
    return (
        <>
            {isLandingPage ? (
                <>
                    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'none' }}>
                        <video src={'/landing.mp4'} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: -1 }}></video>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: "column", gap: '40px', textAlign: 'center' }}>
                            <h1 style={{ position: 'relative', color: 'white' }}>Welcome to our Blog post</h1>
                            <div style={{ display: 'inline-flex', gap: "20px" , zIndex:'2'}}>
                                <Button text="Let's explore" onClick = {handleCLick} />
                                <Button text="Log In" onClick={handleLogin} />
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <>
                    <div style={{ position: 'relative' }}>
                        <div className="glowing" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <span style={{ '--i': 1 }}></span>
                            <span style={{ '--i': 2 }}></span>
                            <span style={{ '--i': 3 }}></span>
                        </div>
                        <div className="glowing" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <span style={{ '--i': 1 }}></span>
                            <span style={{ '--i': 2 }}></span>
                            <span style={{ '--i': 3 }}></span>
                        </div>
                    </div>
                    <Navbar />
                    <Intro />
                    {blogs.map((blog, index) => (
                        <Blog key={index} title={blog.title} content={blog.content} />
                    ))}
                </>
            )}
        </>
    )
}

export default Landing