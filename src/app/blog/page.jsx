import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/component/cardList/CardList'
import Menu from '@/component/menu/Menu'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BlogPage</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage