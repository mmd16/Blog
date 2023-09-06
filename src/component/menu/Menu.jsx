import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2>{"What's hot"}</h2>
            <h1>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.items}>
                    <div className={styles.imageContainer}>
                        <Image src="p1.jepg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}></div>

                </Link>
            </div>
        </div>
    )
}

export default Menu