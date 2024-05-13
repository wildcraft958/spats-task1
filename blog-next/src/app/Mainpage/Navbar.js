import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo.jpg" height={'50'} width={'50'}/>
            </div>
            <ul className={styles.ul}>
                <li className={styles.li}><a href="/">Home</a></li>
                <li className={styles.li}><a href="/About">About</a></li>
                <li className={styles.li}><a href="/Contact">Contact</a></li>
                <li className={styles.li}><a href="/LogIn">Login/SignUp</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;