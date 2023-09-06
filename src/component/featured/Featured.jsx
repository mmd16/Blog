import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, there, Regina Ip here! </b>
                Start the journey by browsing my blog!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>This is my first journey.</h1>
                    <p className={styles.postDesc}>
                        Serving traditional dishes to Hong Kong people.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured