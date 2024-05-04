import React from 'react';
import Image from 'next/image';

const styles = {    
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1rem",
        backgroundColor: "#232323"
    },
    logo: {
        borderRadius: "50%"
    },
    ul: {
        display: "flex",
        listStyle: "none"
    },
    li: {
        margin: "0 1rem"
    }
};

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div className="logo" style={styles.logo}>
                <Image src="/logo.jpg" width={78} height={47} />
            </div>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="/">Home</a></li>
                <li style={styles.li}><a href="/about">About</a></li>
                <li style={styles.li}><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;