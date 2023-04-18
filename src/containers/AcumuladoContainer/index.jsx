import React from 'react'
import styles from './AcumuladoContainer.module.scss'
import TagList from '@/components/TagList'
import ArticleList from '@/components/ArticleList'

const AcumuladoContainer = () => {
  return (
    <main className={styles.container}>
      <div className={styles.container__sidebarMain}>
        <h1 className={styles.container__sidebarMain__title}>Acumulado Grilla</h1>
        <TagList/>
        <ArticleList/>
      </div>
      <div className={styles.container__aside}/>
    </main>
  )
}

export default AcumuladoContainer