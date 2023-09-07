import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/component/menu/Menu'
import Image from 'next/image'
import Comments from '@/component/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Welcome to my blog</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Regina Ip</span>
                            <span className={styles.date}>07/09/2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.</p>
                        <h2>Welcome to my blog.</h2>
                        <p>Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.</p>
                        <p>Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.Welcome to my blog.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage