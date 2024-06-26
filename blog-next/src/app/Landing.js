import React from 'react'
import Button from './Mainpage/Button'
import Link from 'next/link'
import '@/Styles/Landing.module.css'


function Landing() {
    return (
        <>
            <div className="main" style={{ width: '100%', height: '100%', position: 'relative', overflow:'hidden'}}>
                <video className="videobg" src={'/landing.mp4'} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: -1 }}></video>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: "column", gap: '40px', textAlign: 'center' }}>
                    <h1 className="text" style={{ position: 'relative', color: 'white', fontSize:'60px' }}>Welcome to our Blog post</h1>
                    <div style={{ display: 'flex', gap: "20px", zIndex: '2' , justifyContent:'center'}}>
                        <Link href="/Mainpage">
                            <Button text="Let's explore" />
                        </Link>
                        <Link href="/LogIn">
                            <Button text="Log In" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing