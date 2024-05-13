import React from 'react'
import Blog from './Blog'
import Intro from './Intro'
import styles from '@/Styles/Mainpage.module.css'
import Data from '@/app/data/blog.json'


function Mainpage() {
    return (
        <div className={styles['main']}>
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
            <Intro />
            {Data.blogs.map((blog, index) => (
                <Blog key={index} title={blog.title} content={blog.content} />
            ))}
        </div>
    )
}

export default Mainpage
